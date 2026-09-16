pipeline {
    agent any
    
    stages {
        stage('Checkout Code') {
            steps {
                echo 'GitHub se fresh code download ho raha hai...'
            }
        }
        
        stage('Run Playwright Tests') {
            steps {
                echo 'Node/Playwright environment ke andar tests run ho rahe hain...'
                // Docker image build karne ke bajaye direct framework commands chalaein
                sh 'npm install'
                sh 'npx playwright test'
            }
        }
    }
}
