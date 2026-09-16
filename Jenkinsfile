pipeline {
    agent any
    
    // Yeh block Jenkins ko batayega ke node use kare
    tools {
        nodejs 'node20' 
    }
    
    stages {
        stage('Checkout Code') {
            steps {
                echo 'GitHub se fresh code download ho raha hai...'
            }
        }
        
        stage('Run Playwright Tests') {
            steps {
                echo 'Node/Playwright environment ke andar tests run ho rahe hain...'
                sh 'npm install'
                // Playwright ke zaroori browsers download karne ke liye
                sh 'npx playwright install --with-deps' 
                sh 'npx playwright test'
            }
        }
    }
}
