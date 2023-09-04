// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  baseUrl: 'http://localhost:8080/api/',
  paperCheckUrl: 'http://ec2-52-221-233-118.ap-southeast-1.compute.amazonaws.com:8080/paper_matching_api',
  layoutCheckUrl: 'http://ec2-52-221-233-118.ap-southeast-1.compute.amazonaws.com:8080/layout_parser_api',
  referenceCheckUrl: 'http://ec2-52-221-233-118.ap-southeast-1.compute.amazonaws.com:8080/reference_validation_api',
  summarizationUrl: 'http://ec2-52-221-233-118.ap-southeast-1.compute.amazonaws.com:8080/summarization_api'

};
