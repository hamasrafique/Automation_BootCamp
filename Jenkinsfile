pipeline {
    agent any 

    stages {
        stage('Run Playwright Tests') {
            agent {
                docker {
                    image '://microsoft.com'
                    // Explicitly reuse the node instance to access the host socket mounts
                    reuseNode true 
                }
            }
            steps {
                // Execute setup and tests entirely inside the isolated Playwright container
                sh 'npm ci'
                sh 'npx playwright test'
            }
        }
    }

    post {
        always {
            // Context-safe artifact archiving layout
            node('built-in') {
                archiveArtifacts artifacts: 'playwright-report/**/*, test-results/**/*', allowEmptyArchive: true
            }
        }
    }
}
