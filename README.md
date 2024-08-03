# A proposal for more Service Standard transparency by using the GOV.UK service footer


An idea to make services developed to the GOV.UK Service Standard have better transparency mechanisms (while also freeing up the space taken up by the phase banner and feedback link on current services).
## The footer

<img width="1425" alt="Privacy statement Accessibility Terms and conditions Give feedback Beta This is a new service assured to the Service Standard - view assurance history and source code  All content is available under the Open Government Licence v3.0, except where otherwise stated © Crown copyright " src="https://github.com/user-attachments/assets/8295b6e3-ccb4-4ad5-b0e5-6361f44941c6">

## The Service assessment history page
Forgive the incorrect formatting of the header, this is an Eleventy default

<img width="583" alt="Service assurance history for [service name] This service must meet the Service Standard. This is because it: changes a customer record, is built, not bought, entered discovery after 1 June 2019 - services before this date were assured to a previous version of the Service Standard More about the Service Standard on GOV.UK. Service assurance for this service This page is accurate as of 3 August 2024. Assurance event	Date	Result	Report Live assessment	1 July 2024	Not met	Not yet published; Beta reassessment	1 March 2023	Met	Department service standard reports; Beta assessment	14 December 2022	Met	GOV.UK service standard reports; Alpha reassessment	29 July 2021	Met	GOV.UK service standard reports; Alpha assessment	1 March 2021	Not met	GOV.UK service standard reports. All service assessments after 1 April 2021 were run by the Central Data and Digital Office and any before that date by the Government Digital Service." src="https://github.com/user-attachments/assets/bc6342da-5c29-4711-b9f6-8b8628d1ade4">




[See the example and full explanation on Github.io](https://vickytnz.github.io/govuk-header-footer/)

## Support
Leave comments in Github but also link to the [GOV.UK footer chat](https://github.com/alphagov/govuk-design-system-backlog/issues/96)

## Contributors

Thanks to:

* @joelanman for suggestion to make 'Feedback' more of an action - it is now 'Give feedback'
* Rosanna Fairthorne (via xgov-slack) for pressing down on the need for the history to flex for non-standard assurance. This will need workshopping as Rosanna suggested but as a first point I have renamed 'service assessments' to 'service assurance' - other comments about the framing of the Service Standard have also been included in the history page.
* @edwardhorsford to more explicitly separate user-facing and government-facing links - 'Give feedback' has remained on the first line as a user-facing action, whereas 'Source code' (was 'Open-sourced code') has moved down to the second line with the phase and 'Service assurance history'. I did try using the proper navigation components but it looked strange and I think would need hacking of the component.
