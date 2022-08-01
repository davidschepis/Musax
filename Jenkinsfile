// pipeline {
//     stages {
//         stage("Clone repo") {
//             steps {
//                 script {
//                     checkout scm
//                 }
//             }
//         }

//         stage("Build") {
            
//         }
//     }
// }

pipeline {
    agent {
        dockerfile true
    }
    stages {
        stage('Test') {
            steps {
                sh 'ls'
            }
        }
    }
}