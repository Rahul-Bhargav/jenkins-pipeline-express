pipeline {
    agent {
        docker {
            image 'node:alpine' 
            args '-p 3000:3000 -u 0:0' 
        }
    }
    stages {

        stage('Checkout') {
            steps{
                echo 'Getting source code...'
                checkout scm                
            }
        }

        stage('Build') {
            steps {
                echo 'Building dependencies...'
                sh 'echo whoami'
                sh 'npm i'
            }
        }

        stage('Test') {
            steps {
                echo 'Node Testing...'
                sh 'npm test'
            }
        }
        stage('End') {
            steps {
                echo 'Node Testing...'
                sh 'docker ps -a | grep node_build | awk -F \' \' \'{print $1}\' | xargs -n 1 docker rm -f'
            }
        }
    }
}
