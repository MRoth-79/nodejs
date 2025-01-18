pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Cloning the repository...'
                git url: 'https://github.com/berezovsky13/nodejs.git', branch: 'main'
            }
        }
        stage('Build') {
            steps {
                echo 'Installing dependencies and running tests...'
                bat 'npm install'          
                          
            }
        } 
    }

    post {
        always {
            echo 'Pipeline execution completed.'
        }
    }
}
