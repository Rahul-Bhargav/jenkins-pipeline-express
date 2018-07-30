pipeline {
    agent {
        docker {
            image 'node:alpine' 
            args '-p 3000:3000' 
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
                sh 'sudo npm i'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'sudo npm test'
            }
        }
    }
}
