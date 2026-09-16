pipeline {
    agent any
    
    tools {
        nodejs 'NodeJS'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Installs Node packages
                sh 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                // Downloads Chromium, Firefox, and WebKit inside the runner environment
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                // Runs the tests directly on the system
                sh 'npx playwright test'
            }
        }
    }

    post {
        always {
            // Archives build results and logs
            archiveArtifacts artifacts: 'playwright-report/**/*, test-results/**/*', allowEmptyArchive: true
            
            // Generates the visual Jenkins Report Tab
            publishHTML(target: [
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report'
            ])
        }
    }
}
