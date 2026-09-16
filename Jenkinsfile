pipeline {
    agent {
        docker {
            image '://microsoft.com'
            args '-v /var/run/docker.sock:/var/run/docker.sock'
            reuseNode true
        }
    }
    
    stages {
        stage('Run Playwright Tests') {
            steps {
                sh 'npm ci'
                sh 'npx playwright test'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**/*, test-results/**/*', allowEmptyArchive: true
        }
    }
}
