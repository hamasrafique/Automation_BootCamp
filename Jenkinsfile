pipeline {
    // Is line se Jenkins automatically internet se Playwright ka ready-made container uthaye ga
    agent {
        docker { 
            image '://microsoft.com' 
        }
    }
    
    stages {
        stage('Checkout Code') {
            steps {
                echo 'GitHub se fresh code download ho raha hai...'
            }
        }
        
        stage('Run Playwright Tests') {
            steps {
                echo 'Playwright environment ke andar tests execute ho rahe hain...'
                // Is container mein npm pehle se hota hai, bas packages install karein aur test run karein
                sh 'npm ci'
                sh 'npx playwright test'
            }
        }
    }
}
