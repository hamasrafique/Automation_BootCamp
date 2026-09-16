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

        stage('Run Playwright Tests') {
            steps {
                // Uses the host Docker engine to run tests inside a fully prepared Playwright environment
                sh '''
                docker run --rm \
                  -v "${WORKSPACE}":/work \
                  -w /work \
                  ://microsoft.com \
                  /bin/bash -c "npm ci && npx playwright test"
                '''
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
