pipeline {
    agent any
    
    tools {
        nodejs 'node20' // Yeh aapke Jenkins Tools wale naam se match hona chahiye
    }
    
    environment {
        // Yeh line Linux containers mein chromium browser ko chalne mein madad deti hai
        PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD = '0'
    }
    
    stages {
        stage('Checkout Code') {
            steps {
                echo 'GitHub se fresh code download ho raha hai...'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                echo 'npm packages install ho rahe hain...'
                sh 'npm install'
            }
        }
        
        stage('Install Playwright Browsers') {
            steps {
                echo 'Playwright ke browsers aur system dependencies install ho rahi hain...'
                // Is command se Linux environment ke zaroori tools khud download ho jayein ge
                sh 'npx playwright install --with-deps'
            }
        }
        
        stage('Run Playwright Tests') {
            steps {
                echo 'Playwright automation tests run ho rahe hain...'
                sh 'npx playwright test'
            }
        }
    }
    
    post {
        always {
            echo 'Testing complete! Reports generate ho rahi hain...'
            // Agar aap test results safe rakhna chahte hain
            archiveArtifacts artifacts: 'playwright-report/**, test-results/**', allowEmptyArchive: true
        }
    }
}
