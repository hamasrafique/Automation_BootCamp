pipeline {
    agent any

    stages {
        stage('Run Playwright Tests') {
            steps {
                // We use standard shell commands so Jenkins does not get confused by plugin paths
                sh '''
                docker run --rm \
                  -v /var/run/docker.sock:/var/run/docker.sock \
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
            // This is wrapped inside the node context so it never throws a MissingContextVariableException
            archiveArtifacts artifacts: 'playwright-report/**/*, test-results/**/*', allowEmptyArchive: true
        }
    }
}
