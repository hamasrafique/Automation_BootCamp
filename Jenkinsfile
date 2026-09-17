post {
    always {

        echo '===== COPYING REPORTS FROM DOCKER VOLUME ====='

        sh '''
            docker run --rm \
              -v playwright-ci-workspace-${BUILD_NUMBER}:/work \
              alpine:latest \
              sh -c "
                tar -czf - \
                  -C /work \
                  playwright-report \
                  allure-results \
                  test-results
              " \
            | tar -xzf - -C "${WORKSPACE}" || true
        '''

        echo '===== ARCHIVING TEST REPORTS ====='

        archiveArtifacts artifacts: '''
            playwright-report/**,
            allure-results/**,
            test-results/**
        ''',
        allowEmptyArchive: true,
        fingerprint: true

        echo '===== PUBLISHING PLAYWRIGHT HTML REPORT ====='

        publishHTML([
            allowMissing: true,
            alwaysLinkToLastBuild: true,
            keepAll: true,
            reportDir: 'playwright-report',
            reportFiles: 'index.html',
            reportName: 'Playwright HTML Report'
        ])

        echo '===== CLEANING CI DOCKER VOLUME ====='

        sh '''
            docker volume rm playwright-ci-workspace-${BUILD_NUMBER} || true
        '''
    }
}