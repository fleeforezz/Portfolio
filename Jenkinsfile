pipeline {
    agent any
    
    environment {
        // ANSI Color Code
        RESET_COLOR = '\033[0m'
        RED = '\033[31m'
        GREEN = '\033[032m'
        BLUE = '\033[034m'
        YELLOW = '\033[033m'
        PURPLE = '\033[035m'

        // Project info
        APP_NAME = "portfolio"
        RELEASE = "1.0.0"
        GITHUB_URL = "https://github.com/fleeforezz/Portfolio.git"

        // Sonar Scanner info
        SCANNER_HOME=tool 'sonar-server'
        SONAR_HOST_URL = "https://sonarqube.fleeforezz.me"

        // Docker info
        DOCKER_USER = "fleeforezz"
        IMAGE_NAME = "${DOCKER_USER}" + "/" + "${APP_NAME}"
        IMAGE_RELEASE_TAG = "${RELEASE}-${BUILD_NUMBER}"
        IMAGE_LATEST_TAG = "latest"
        IMAGE_BETA_TAG = "beta"

        // Server info
        SERVER_USERNAME = "nhat"
        SERVER_IP = "10.0.1.32"
        SERVER_CONNECTION = "${SERVER_USERNAME}" + " " + "${SERVER_IP}"
    }

    stages {
        stage('Clean up WorkSpace') {
            steps {
                echo "${RED}Clean up WorkSpace${RESET_COLOR}"
                cleanWs()
            }
        }
        
        stage('Git Checkout') {
            steps {
                git branch: 'main', url: "${GITHUB_URL}"
            }
        }
        
        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('sonar-server') {
                    sh "${BLUE}Sonar Scan${RESET_COLOR}"
                    sh "$SCANNER_HOME/bin/sonar-scanner -Dsonar.projectKey=Portfolio -Dsonar.projectKey=Portfolio -Dsonar.host.url=${SONAR_HOST_URL}"
                }
            }
        }
        
        // stage('Quality Gate') {
        //     steps {
        //         script {
        //             timeout(time: 2, unit: 'MINUTES') {
        //                 waitForQualityGate abortPipeline: true
        //             }
        //         }
        //     }
        // }
        
        stage('Node Build') {
            steps {
                sh "${GREEN}Node install and build${RESET_COLOR}"
                sh "npm install"
                sh "npm run build"
            }
        }
        
        stage('Docker Build') {
            steps {
                sh "${BLUE}Docker build${RESET_COLOR}"
                sh "sudo docker build --pull -t ${IMAGE_NAME}:${IMAGE_LATEST_TAG} ."
            }
        }
        
        stage('Trivy Scan') {
            steps {
                sh "${YELLOW}Trivy Scan${RESET_COLOR}"
                sh "trivy image --no-progress --exit-code 1 --severity HIGH,CRITICAL ${IMAGE_NAME}:${IMAGE_LATEST_TAG} > trivyimage.txt"
                sh "trivy fs . > trivyfs.txt"
            }
        }
        
        stage('Docker Push') {
            steps {
                script {
                    withDockerRegistry(credentialsId: '729be586-4e3e-45ce-9ace-bf1d85f2a6c3', toolName: 'Docker') {
                        sh "${BLUE}Push Docker Image to Dockerhub Registry${RESET_COLOR}"
                        sh "sudo docker push ${IMAGE_NAME}:${IMAGE_LATEST_TAG}"
                    }
                }
            }
        }
        
        // stage('Deploy to server') {
        //     steps {
        //         sshagent(['production-srv']) {
        //             sh "ssh -o StrictHostKeyChecking=no -l ${SERVER_CONNECTION}  'sudo docker stop ${APP_NAME} || true && sudo docker rm ${APP_NAME} || true'"
        //             sh "ssh -o StrictHostKeyChecking=no -l ${SERVER_CONNECTION} 'sudo docker run -p 9463:9463 -d --name ${APP_NAME} --restart unless-stopped ${IMAGE_NAME}'"
        //         }
        //     }
        // }
        
        stage('Deploy to Kubernetes') {
            steps {
                script {
                    dir('Kubernetes') { 
                        withKubeConfig(caCertificate: '', clusterName: '', contextName: '', credentialsId: 'k8s', namespace: '', restrictKubeConfigAccess: false, serverUrl: '') {
                            sh "${PURPLE}Deploy to Kubernetes${RESET_COLOR}"
                            sh 'kubectl apply -f deployment.yml'
                            sh 'kubectl apply -f service.yml' 
                            sh 'kubectl get svc'
                            sh 'kubectl get all'
                        }
                    }
                }
            }
        }
    }
    
    post {
        always {
            emailext attachLog: true, 
            subject: "${currentBuild.result}",
            body: "Project: ${env.JOB_NAME}<br/>" +
            "Build Number: ${env.BUILD_NUMBER}<br/>" +
            "Docker Image Tag: ${IMAGE_LATEST_TAG}<br/>" +
            "URL: ${env.BUILD_URL}<br/>",
            to: 'fleeforezz@gmail.com',
            attachmentsPattern: 'trivyfs.txt, trivyimage.txt'
        }
    }
}
