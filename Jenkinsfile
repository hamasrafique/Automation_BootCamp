pipeline {
    agent any
    
    tools {
        nodejs 'NodeJS'
        dockerTool 'downloaded-docker' // Forces Jenkins to use the automatically managed Docker binary
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Run Playwright Tests') {
            agent {
                docker {
                    image '://microsoft.com'
                    reuseNode true
                }
            }
            steps {
                sh 'npx playwright test'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**/*, test-results/**/*', allowEmptyArchive: true
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
