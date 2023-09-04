export const environment = {
  production: true,
  baseUrl: 'http://localhost:8080/api/',
  paperCheckUrl: 'http://ec2-52-221-233-118.ap-southeast-1.compute.amazonaws.com:8080/paper_matching_api',
  layoutCheckUrl: 'http://ec2-52-221-233-118.ap-southeast-1.compute.amazonaws.com:8080/layout_parser_api',
  referenceCheckUrl: 'http://ec2-52-221-233-118.ap-southeast-1.compute.amazonaws.com:8080/reference_validation_api',
  summarizationUrl: 'http://ec2-52-221-233-118.ap-southeast-1.compute.amazonaws.com:8080/summarization_api'
};
