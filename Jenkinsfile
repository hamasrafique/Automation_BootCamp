pipeline {
    agent any
    
    stages {
        stage('Checkout Code') {
            steps {
                echo 'GitHub se fresh code download ho raha hai...'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                echo 'Nayi Docker Image generate ho rahi hai...'
                // 'my-app' ki jagah apni image ka exact naam rakh sakte hain
                sh 'docker build -t my-app:latest .'
            }
        }
        
        stage('Deploy Container') {
            steps {
                echo 'Purane container ka stop karke naya container run kiya ja raha hai...'
                // Agar pehle se chal raha ho tou remove karega, warna error nahi dega
                sh 'docker rm -f my-app-container || true'
                sh 'docker run -d --name my-app-container -p 8080:8080 my-app:latest'
            }
        }
    }
}
