@Library('jenkins-shared-library') _

import org.longnv.pipeline.Environment
import org.longnv.pipeline.TestType
import org.longnv.pipeline.SlackChannel

testPipeline([
  testTypes: [ TestType.REGRESSION_TEST ],
  environments: [ Environment.STAGING ],
  workers: '8',
  slackChannel: SlackChannel.SCHEDULED_TESTS_PRODTEST,
  cronSchedule: 'H(0-0) 23 * * *' // Run everyday at 23p.m at Asia/Ho_Chi_Minh
])
