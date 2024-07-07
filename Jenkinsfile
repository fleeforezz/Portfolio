pipeline {
    agent any
    
    environment {
        // Project info
        APP_NAME = "portfolio"
        RELEASE = "1.0.0"

        // Sonar Scanner info
        SCANNER_HOME=tool 'sonar-server'
        SONAR_HOST_URL = "https://sonarqube.fleeforezz.me"

        // Docker info
        DOCKER_USER = "fleeforezz"
        IMAGE_NAME = "${DOCKER_USER}" + "/" + "${APP_NAME}"
        IMAGE_TAG = "${RELEASE}-${BUILD_NUMBER}"
    }

    stages {
        stage('Clean up WorkSpace') {
            steps {
                cleanWs()
            }
        }
        
        stage('Git Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/fleeforezz/Portfolio.git'
            }
        }
        
        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('sonar-server') {
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
                sh "npm install"
                sh "npm run build"
            }
        }
        
        stage('Docker Build') {
            steps {
                sh "sudo docker build --pull -t ${IMAGE_NAME}:${IMAGE_TAG} ."
            }
        }
        
        stage('Trivy Scan') {
            steps {
                sh "trivy image --no-progress --exit-code 1 --severity HIGH,CRITICAL ${IMAGE_NAME}:${IMAGE_TAG}"
                sh "trivy fs . > trivyfs.txt"
            }
        }
        
        stage('Docker Push') {
            steps {
                script {
                    withDockerRegistry(credentialsId: '729be586-4e3e-45ce-9ace-bf1d85f2a6c3', toolName: 'Docker') {
                        sh "sudo docker push ${IMAGE_NAME}:${IMAGE_TAG}"
                    }
                }
            }
        }
        
        // stage('Deploy to server') {
        //     steps {
        //         sshagent(['production-srv']) {
        //             sh "ssh -o StrictHostKeyChecking=no -l nhat 10.0.1.32  'sudo docker stop portfolio || true && sudo docker rm portfolio || true'"
        //             sh "ssh -o StrictHostKeyChecking=no -l nhat 10.0.1.32 'sudo docker run -p 9463:9463 -d --name portfolio --restart unless-stopped fleeforezz/portfolio'"
        //         }
        //     }
        // }
        
        stage('Deploy to Kubernetes') {
            steps {
                script {
                    dir('Kubernetes') { 
                        withKubeConfig(caCertificate: '', clusterName: '', contextName: '', credentialsId: 'k8s', namespace: '', restrictKubeConfigAccess: false, serverUrl: '') {
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
            "Docker Image Tag: ${IMAGE_TAG}<br/>" +
            "URL: ${env.BUILD_URL}<br/>",
            to: 'fleeforezz@gmail.com'
            attachmentsPattern: 'trivyfs.txt, trivyimage.txt'
        }
    }
}
