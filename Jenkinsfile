pipeline {
    agent {
        docker {
            image 'node:alpine' 
            args '-p 3000:3000' 
        }
    }
    stages {

        stage('Checkout') {
            echo 'Getting source code...'
            checkout scm
        }

        stage('Build') {
            echo 'Building dependencies...'
            sh 'npm i'
        }

        stage('Test') {
            echo 'Testing...'
            sh 'npm test'
        }
    }
}
