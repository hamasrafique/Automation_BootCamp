pipeline {
    agent any

    stages {

        stage('Check Docker') {
            steps {
                sh 'docker version'
            }
        }

        stage('Checkout GitHub') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/hamasrafique/Automation_BootCamp.git'
            }
        }

        stage('Create CI Workspace Volume') {
            steps {
                sh '''
                    echo "===== CREATING DOCKER CI VOLUME ====="

                    docker volume create playwright-ci-workspace-${BUILD_NUMBER}

                    echo "===== COPYING JENKINS WORKSPACE TO DOCKER VOLUME ====="

                    tar \
                      --exclude=.git \
                      --exclude=node_modules \
                      --exclude=test-results \
                      -czf - . \
                    | docker run -i --rm \
                        -v playwright-ci-workspace-${BUILD_NUMBER}:/work \
                        alpine:latest \
                        tar -xzf - -C /work
                '''
            }
        }

        stage('Verify Docker Workspace') {
            steps {
                sh '''
                    echo "===== VERIFYING PROJECT FILES ====="

                    docker run --rm \
                      -v playwright-ci-workspace-${BUILD_NUMBER}:/work \
                      alpine:latest \
                      sh -c "
                        ls -l /work/package.json &&
                        ls -l /work/playwright.config.js &&
                        ls -l /work/SmokeTest/SmokeTest.spec.js
                      "
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                    echo "===== INSTALLING NPM DEPENDENCIES ====="

                    docker run --rm \
                      -v playwright-ci-workspace-${BUILD_NUMBER}:/work \
                      -w /work \
                      playwright-tests:latest \
                      npm ci
                '''
            }
        }

        stage('Run Playwright Smoke Tests') {
            steps {
                sh '''
                    echo "===== RUNNING PLAYWRIGHT SMOKE TEST ====="

                    docker run --rm \
                      -e CI=true \
                      -v playwright-ci-workspace-${BUILD_NUMBER}:/work \
                      -w /work \
                      playwright-tests:latest \
                      npx playwright test SmokeTest/SmokeTest.spec.js --project=chromium
                '''
            }
        }
    }

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

            echo '===== CLEANING CI DOCKER VOLUME ====='

            sh '''
                docker volume rm playwright-ci-workspace-${BUILD_NUMBER} || true
            '''
        }
    }
}