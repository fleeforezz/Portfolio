pipeline {
    agent any
    
    environment {
        SCANNER_HOME=tool 'sonar-server'
    }

    stages {
        stage('Git Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/fleeforezz/Portfolio.git'
                echo "Git clone successfull"
            }
        }
        
        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('sonar-server') {
                    sh "$SCANNER_HOME/bin/sonar-scanner -Dsonar.projectKey=Portfolio -Dsonar.projectKey=Portfolio -Dsonar.host.url=https://sonarqube.fleeforezz.me"
                }
            }
        }
        
        // stage('Quality Gate') {
        //     steps {
        //         script {
        //             waitForQualityGate abortPipeline: false, credentialsId: 'sonar-token'
        //         }
        //     }
        // }
        
        stage('Node Build') {
            steps {
                sh "npm install"
                sh "npm run build"
                echo "Node build successfull"
            }
        }
        
        stage('Docker Build') {
            steps {
                sh "sudo chmod 700 run-build.sh"
                sh "./run-build.sh"
                echo "Docker build successfull"
            }
        }
        
        stage('Docker Push') {
            steps {
                script {
                    withDockerRegistry(credentialsId: '729be586-4e3e-45ce-9ace-bf1d85f2a6c3', toolName: 'Docker') {
                        sh "sudo docker push fleeforezz/portfolio"
                        echo "Docker push successfull"
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
            "URL: ${env.BUILD_URL}<br/>",
            to: 'fleeforezz@gmail.com',
            attachmentsPattern: 'trivyfs.txt, trivyimage.txt'
        }
    }
}
