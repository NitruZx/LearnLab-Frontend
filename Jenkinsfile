pipeline {
    agent any

    stages {
        stage('Build') {
            agent{
                docker{
                    image 'node:22.11.0-alpine3.20'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    npm --version
                    npm ci
                    npm run build
                    
                '''
            }
        }
    }
}
