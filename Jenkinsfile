pipeline {
  agent {
    kubernetes {
      label 'jenkins-web'
      defaultContainer 'jnlp'
    }
  }
  stages {
    /*
    stage('Build and unit test') {
      when {
        expression { BRANCH_NAME ==~ /(feature\/*|development|jenkins)/ }
      }
      steps {
        build(job: 'crisiscleanup-web-unit',
          parameters: [
            string(name: 'upstreamBranch', value: "${env.BRANCH_NAME}")
          ],
          propagate: true,
          wait: true)
        slackSend(color: "good", message: "UNIT TESTS PASSED: ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)")
      }
    }
    stage('Functional environment build') {
      when {
        expression { BRANCH_NAME ==~ /(feature\/*|development|jenkins)/ }
      }
      steps {
        build(job: 'crisiscleanup-web-build',
          parameters: [
            string(name: 'upstreamBranch', value: "${env.BRANCH_NAME}"),
            string(name: 'deployEnv', value: 'functionalci')
          ],
          propagate: true,
          wait: true)
      }
    }
    stage('Functional environment test') {
      when {
        expression { BRANCH_NAME ==~ /(feature\/*|development|jenkins)/ }
      }
      steps {
        build(job: 'crisiscleanup-functional-tests',
          parameters: [string(name: 'upstreamBranch', value: "${env.BRANCH_NAME}")],
          propagate: true,
          wait: true)
      }
    }
    */
    stage('Build and deploy') {
      when {
        expression { BRANCH_NAME ==~ /(feature\/*|development|jenkins)/ }
      }
      parallel {
        stage('Functional env build') {
          steps {
            build(job: 'crisiscleanup-web-build',
              parameters: [
                string(name: 'upstreamBranch', value: "${env.BRANCH_NAME}"),
                string(name: 'deployEnv', value: 'functionalci')
              ],
              propagate: true,
              wait: true)
          }
        }
        stage('Dev env build and deploy') {
          steps {
            build(job: 'crisiscleanup-web-build',
              parameters: [
                string(name: 'upstreamBranch', value: "${env.BRANCH_NAME}"),
                string(name: 'deployEnv', value: 'realdev')
              ],
              propagate: true,
              wait: true)
          }
        }
        stage('Staging env build and deploy') {
          steps {
            build(job: 'crisiscleanup-web-build',
              parameters: [
                string(name: 'upstreamBranch', value: "${env.BRANCH_NAME}"),
                string(name: 'deployEnv', value: 'realstaging')
              ],
              propagate: true,
              wait: true)
          }
        }
        stage('Prod env build') {
          steps {
            build(job: 'crisiscleanup-web-build',
              parameters: [
                string(name: 'upstreamBranch', value: "${env.BRANCH_NAME}"),
                string(name: 'deployEnv', value: 'realprod')
              ],
              propagate: true,
              wait: true)
          }
        }
      }
    }
  }
  post {
    success {
      slackSend(color: "good", message: "SUCCESS: ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)")
    }
    failure {
      slackSend(color: "danger", message: "FAILED: ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)")
    }
    unstable {
      slackSend(color: "warn", message: "UNSTABLE: ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)")
    }
  }
}
