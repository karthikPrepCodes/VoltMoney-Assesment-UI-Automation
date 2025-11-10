pipeline {
  agent any

  tools {
    // Change the name below to match the NodeJS tool name from Manage Jenkins -> Global Tool Configuration
    nodejs "node18"
  }

  environment {
    PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD = "0"
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install dependencies') {
      steps {
        // If you have package-lock.json use npm ci, else npm install
        script {
          if (fileExists('package-lock.json')) {
            sh 'npm ci --no-audit --no-fund'
          } else {
            sh 'npm install --no-audit --no-fund'
          }
        }
      }
    }

    stage('Install Playwright browsers') {
      steps {
        // ensure browsers are installed (required at least once)
        sh 'npx playwright install --with-deps'
      }
    }

    stage('Run Playwright Tests') {
      steps {
        // run tests; change CLI flags if you want specific folder/project
        sh 'npx playwright test --reporter=html'
      }
    }

    stage('Archive & Publish Report') {
      steps {
        // archive and publish html report
        archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
        publishHTML(target: [
          reportDir: 'playwright-report',
          reportFiles: 'index.html',
          reportName: 'Playwright HTML Report',
          keepAll: true
        ])
      }
    }
  }

  post {
    success {
      echo "Playwright tests finished SUCCESS"
    }
    failure {
      echo "Playwright tests FAILED"
    }
    always {
      // you can add cleanup steps here
      sh 'echo Build finished at $(date)'
    }
  }
}
