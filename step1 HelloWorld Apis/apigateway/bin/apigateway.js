#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
const cdk = require("aws-cdk-lib");
const apigateway_stack_1 = require("../lib/apigateway-stack");
const app = new cdk.App();
new apigateway_stack_1.ApigatewayStack(app, 'ApigatewayStack', {
/* If you don't specify 'env', this stack will be environment-agnostic.
 * Account/Region-dependent features and context lookups will not work,
 * but a single synthesized template can be deployed anywhere. */
/* Uncomment the next line to specialize this stack for the AWS Account
 * and Region that are implied by the current CLI configuration. */
// env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
/* Uncomment the next line if you know exactly what Account and Region you
 * want to deploy the stack to. */
// env: { account: '123456789012', region: 'us-east-1' },
/* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpZ2F0ZXdheS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwaWdhdGV3YXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsdUNBQXFDO0FBQ3JDLG1DQUFtQztBQUNuQyw4REFBMEQ7QUFFMUQsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDMUIsSUFBSSxrQ0FBZSxDQUFDLEdBQUcsRUFBRSxpQkFBaUIsRUFBRTtBQUMxQzs7aUVBRWlFO0FBRWpFO21FQUNtRTtBQUNuRSw2RkFBNkY7QUFFN0Y7a0NBQ2tDO0FBQ2xDLHlEQUF5RDtBQUV6RCw4RkFBOEY7Q0FDL0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xuaW1wb3J0ICogYXMgY2RrIGZyb20gJ2F3cy1jZGstbGliJztcbmltcG9ydCB7IEFwaWdhdGV3YXlTdGFjayB9IGZyb20gJy4uL2xpYi9hcGlnYXRld2F5LXN0YWNrJztcblxuY29uc3QgYXBwID0gbmV3IGNkay5BcHAoKTtcbm5ldyBBcGlnYXRld2F5U3RhY2soYXBwLCAnQXBpZ2F0ZXdheVN0YWNrJywge1xuICAvKiBJZiB5b3UgZG9uJ3Qgc3BlY2lmeSAnZW52JywgdGhpcyBzdGFjayB3aWxsIGJlIGVudmlyb25tZW50LWFnbm9zdGljLlxuICAgKiBBY2NvdW50L1JlZ2lvbi1kZXBlbmRlbnQgZmVhdHVyZXMgYW5kIGNvbnRleHQgbG9va3VwcyB3aWxsIG5vdCB3b3JrLFxuICAgKiBidXQgYSBzaW5nbGUgc3ludGhlc2l6ZWQgdGVtcGxhdGUgY2FuIGJlIGRlcGxveWVkIGFueXdoZXJlLiAqL1xuXG4gIC8qIFVuY29tbWVudCB0aGUgbmV4dCBsaW5lIHRvIHNwZWNpYWxpemUgdGhpcyBzdGFjayBmb3IgdGhlIEFXUyBBY2NvdW50XG4gICAqIGFuZCBSZWdpb24gdGhhdCBhcmUgaW1wbGllZCBieSB0aGUgY3VycmVudCBDTEkgY29uZmlndXJhdGlvbi4gKi9cbiAgLy8gZW52OiB7IGFjY291bnQ6IHByb2Nlc3MuZW52LkNES19ERUZBVUxUX0FDQ09VTlQsIHJlZ2lvbjogcHJvY2Vzcy5lbnYuQ0RLX0RFRkFVTFRfUkVHSU9OIH0sXG5cbiAgLyogVW5jb21tZW50IHRoZSBuZXh0IGxpbmUgaWYgeW91IGtub3cgZXhhY3RseSB3aGF0IEFjY291bnQgYW5kIFJlZ2lvbiB5b3VcbiAgICogd2FudCB0byBkZXBsb3kgdGhlIHN0YWNrIHRvLiAqL1xuICAvLyBlbnY6IHsgYWNjb3VudDogJzEyMzQ1Njc4OTAxMicsIHJlZ2lvbjogJ3VzLWVhc3QtMScgfSxcblxuICAvKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIGh0dHBzOi8vZG9jcy5hd3MuYW1hem9uLmNvbS9jZGsvbGF0ZXN0L2d1aWRlL2Vudmlyb25tZW50cy5odG1sICovXG59KTsiXX0=