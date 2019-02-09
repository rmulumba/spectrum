// @flow
import * as React from 'react';
import PageFooter from '../components/footer';
import { Wrapper } from '../style';
import {
  ContentContainer,
  Heading,
  Copy,
  Section,
  SectionTitle,
  SectionDescription,
} from '../pricing/style';
import { PrivacyTermsList } from '../terms/style';
import Head from 'src/components/head';

class Privacy extends React.Component<{}> {
  componentDidMount() {}

  render() {
    return (
      <Wrapper data-cy="privacy-page">
        <Head title={'Grindery · Privacy'} />

        <ContentContainer>
          <Heading>Privacy Policy</Heading>
          <Copy>Effective date: December 12, 2018</Copy>

          <Section>
            <SectionDescription>
              GitHub, Inc. (“GitHub”, “us”, “we”, or “our”) operates the
              chat.grindery.io website (the “Service”).
            </SectionDescription>

            <SectionDescription>
              This page informs you of our policies regarding the collection,
              use, and disclosure of personal data when you use our Service and
              the choices you have associated with that data.
            </SectionDescription>

            <SectionDescription>
              We use your data to provide and improve the Service. By using the
              Service, you agree to the collection and use of information in
              accordance with this policy. Unless otherwise defined in this
              Privacy Policy, terms used in this Privacy Policy have the same
              meanings as in our Terms and Conditions, accessible from
              chat.grindery.io.
            </SectionDescription>
          </Section>

          <Section>
            <SectionTitle>Definitions</SectionTitle>

            <SectionDescription>
              “Service” is the chat.grindery.io website operated by GitHub.
            </SectionDescription>

            <SectionDescription>
              “Personal Data” means data about a living individual who can be
              identified from those data (or from those and other information
              either in our possession or likely to come into our possession).
            </SectionDescription>

            <SectionDescription>
              “Usage Data” is data collected automatically either generated by
              the use of the Service or from the Service infrastructure itself
              (for example, the duration of a page visit).
            </SectionDescription>

            <SectionDescription>
              "Cookies" are small pieces of data stored on your device (computer
              or mobile device).
            </SectionDescription>

            <SectionDescription>
              "Data Controller" means the natural or legal person who (either
              alone or jointly or in common with other persons) determines the
              purposes for which and the manner in which any personal
              information are, or are to be, processed. For the purpose of this
              Privacy Policy, we are a Data Controller of your Personal Data.
            </SectionDescription>

            <SectionDescription>
              "Data Processor" (or "Service Provider") means any natural or
              legal person who processes the data on behalf of the Data
              Controller. We may use the services of various Service Providers
              in order to process your data more effectively.
            </SectionDescription>

            <SectionDescription>
              "Data Subject" is any living individual who is using our Service
              and is the subject of Personal Data.
            </SectionDescription>
          </Section>

          <Section>
            <SectionTitle>Information Collection and Use</SectionTitle>

            <SectionDescription>
              While using our Service, we may ask you to provide us with certain
              personally identifiable information that can be used to contact or
              identify you ("Personal Data"). Personally identifiable
              information may include, but is not limited to email addresses,
              first and last names, cookies, and usage data.
            </SectionDescription>

            <SectionDescription>
              We may use your Personal Data to contact you with newsletters,
              marketing or promotional materials and other information that may
              be of interest to you. You may opt out of receiving any, or all,
              of these communications from us by following the unsubscribe link
              or instructions provided in any email we send.
            </SectionDescription>

            <SectionDescription>
              We may also collect information how the Service is accessed and
              used ("Usage Data"). This Usage Data may include information such
              as your computer’s Internet Protocol address (e.g. IP address),
              browser type, browser version, the pages of our Service that you
              visit, the time and date of your visit, the time spent on those
              pages, unique device identifiers and other diagnostic data.
            </SectionDescription>

            <SectionDescription>
              We use cookies and similar tracking technologies to track the
              activity on our Service and hold certain information.
            </SectionDescription>

            <SectionDescription>
              Cookies are files with small amount of data which may include an
              anonymous unique identifier. Cookies are sent to your browser from
              a website and stored on your device. Tracking technologies also
              used are beacons, tags, and scripts to collect and track
              information and to improve and analyze our Service.
            </SectionDescription>

            <SectionDescription>
              You can instruct your browser to refuse all cookies or to indicate
              when a cookie is being sent. However, if you do not accept
              cookies, you may not be able to use some portions of our Service.
            </SectionDescription>

            <SectionDescription>
              We use Session Cookies to operate our Service. We use Preference
              Cookies to remember your preferences and various settings. We use
              Security Cookies for security purposes.
            </SectionDescription>
          </Section>

          <Section>
            <SectionTitle>Use of Data</SectionTitle>

            <SectionDescription>
              Space Program, Inc. uses the collected data to provide and
              maintain our Service:
            </SectionDescription>

            <PrivacyTermsList>
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>
                To allow you to participate in interactive features of our
                Service when you choose to do so
              </li>
              <li>To provide customer support</li>
              <li>
                To gather analysis or valuable information so that we can
                improve our Service
              </li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent and address technical issues</li>
            </PrivacyTermsList>
          </Section>

          <Section>
            <SectionTitle>
              Legal Basis for Processing Personal Data Under General Data
              Protection Regulation (GDPR)
            </SectionTitle>

            <SectionDescription>
              If you are from the European Economic Area (EEA), Space Program,
              Inc. legal basis for collecting and using the personal information
              described in this Privacy Policy depends on the Personal Data we
              collect and the specific context in which we collect it.
            </SectionDescription>

            <SectionDescription>
              Space Program, Inc. may process your Personal Data because:
            </SectionDescription>

            <PrivacyTermsList>
              <li>We need to perform a contract with you</li>
              <li>You have given us permission to do so</li>
              <li>
                The processing is in our legitimate interests and it’s not
                overridden by your rights
              </li>
              <li>For payment processing purposes</li>
              <li>To comply with the law</li>
            </PrivacyTermsList>
          </Section>

          <Section>
            <SectionTitle>Retention of Data</SectionTitle>

            <SectionDescription>
              We will retain your Personal Data only for as long as is necessary
              for the purposes set out in this Privacy Policy. We will retain
              and use your Personal Data to the extent necessary to comply with
              our legal obligations (for example, if we are required to retain
              your data to comply with applicable laws), resolve disputes, and
              enforce our legal agreements and policies.
            </SectionDescription>

            <SectionDescription>
              We will also retain Usage Data for internal analysis purposes.
              Usage Data is generally retained for a shorter period of time,
              except when this data is used to strengthen the security or to
              improve the functionality of our Service, or we are legally
              obligated to retain this data for longer time periods.
            </SectionDescription>
          </Section>

          <Section>
            <SectionTitle>Transfer of Data</SectionTitle>

            <SectionDescription>
              We store and process the information that we collect in the United
              States in accordance with this Privacy Policy (our subprocessors
              may store and process data outside the United States). For
              cross-border data transfers from the European Union (EU) and the
              European Economic Area (EEA), GitHub adheres to the Privacy Shield
              Framework. You may view our entry in the Privacy Shield List.
            </SectionDescription>

            <SectionDescription>
              If you are located outside United States and choose to provide
              information to us, please note that we transfer the data,
              including Personal Data, to United States and process it there.
            </SectionDescription>

            <SectionDescription>
              Your consent to this Privacy Policy followed by your submission of
              such information represents your agreement to that transfer.
            </SectionDescription>

            <SectionDescription>
              We provide all of our users notice, choice, accountability,
              security, and access, and we limit the purpose for processing. We
              also provide our users a method of recourse and enforcement. These
              are the Privacy Shield Principles, but they are also just good
              practices. In addition, we participate in and comply with the
              Privacy Shield framework, and we are committed to subject any
              Personal Data we receive from the EU and EEA to the Privacy Shield
              Principles. Please read more about GitHub’s international privacy
              commitments.
            </SectionDescription>

            <SectionDescription>
              We will take all steps reasonably necessary to ensure that your
              data is treated securely and in accordance with this Privacy
              Policy and no transfer of your Personal Data will take place to an
              organization or a country unless there are adequate controls in
              place including the security of your data and other personal
              information.
            </SectionDescription>
          </Section>

          <Section>
            <SectionTitle>Disclosure of Data</SectionTitle>

            <SectionDescription>
              If we are involved in a merger, acquisition or asset sale, your
              Personal Data may be transferred. We will provide notice before
              your Personal Data is transferred and becomes subject to a
              different Privacy Policy.
            </SectionDescription>

            <SectionDescription>
              Under certain circumstances, we may be required to disclose your
              Personal Data if required to do so by law or in response to valid
              requests by public authorities (e.g. a court or a government
              agency).
            </SectionDescription>

            <SectionDescription>
              We may disclose your Personal Data in the good faith belief that
              such action is necessary to:
            </SectionDescription>

            <PrivacyTermsList>
              <li>To comply with a legal obligation</li>
              <li>To protect and defend the rights or property of GitHub</li>
              <li>
                To prevent or investigate possible wrongdoing in connection with
                the Service
              </li>
              <li>
                To protect the personal safety of users of the Service or the
                public
              </li>
              <li>To protect against legal liability</li>
            </PrivacyTermsList>
          </Section>

          <Section>
            <SectionTitle>Security of Data</SectionTitle>

            <SectionDescription>
              The security of your data is important to us, but remember that no
              method of transmission over the Internet, or method of electronic
              storage is 100% secure. While we strive to use commercially
              acceptable means to protect your Personal Data, we cannot
              guarantee its absolute security.
            </SectionDescription>
          </Section>

          <Section>
            <SectionTitle>
              Your Data Protection Rights Under General Data Protection
              Regulation (GDPR)
            </SectionTitle>

            <SectionDescription>
              If you are a resident of the European Economic Area (EEA), you
              have certain data protection rights. Space Program, Inc. aims to
              take reasonable steps to allow you to correct, amend, delete, or
              limit the use of your Personal Data.
            </SectionDescription>

            <SectionDescription>
              If you wish to be informed what Personal Data we hold about you
              and if you want it to be removed from our systems, please contact
              us.
            </SectionDescription>

            <SectionDescription>
              In certain circumstances, you have the following data protection
              rights:
            </SectionDescription>

            <PrivacyTermsList>
              <li>
                The right to access, update or to delete the information we have
                on you. Whenever made possible, you can access, update or
                request deletion of your Personal Data directly within your
                account settings section. If you are unable to perform these
                actions yourself, please contact us to assist you.
              </li>
              <li>
                The right of rectification. You have the right to have your
                information rectified if that information is inaccurate or
                incomplete.
              </li>
              <li>
                The right to object. You have the right to object to our
                processing of your Personal Data.
              </li>
              <li>
                The right of restriction. You have the right to request that we
                restrict the processing of your personal information.
              </li>
              <li>
                The right to data portability. You have the right to be provided
                with a copy of the information we have on you in a structured,
                machine-readable and commonly used format.
              </li>
              <li>
                The right to withdraw consent. You also have the right to
                withdraw your consent at any time where we relied on your
                consent to process your personal information. Please note that
                we may ask you to verify your identity before responding to such
                requests.
              </li>
            </PrivacyTermsList>

            <SectionDescription>
              You have the right to complain to a Data Protection Authority
              about our collection and use of your Personal Data. For more
              information, please contact your local data protection authority
              in the European Economic Area (EEA).
            </SectionDescription>

            <SectionDescription>
              If you have concerns about the way GitHub is handling your
              Personal Data, please let us know immediately. We want to help.
              You may contact us by filling out the Privacy contact form. You
              may also email us directly at privacy@github.com with the subject
              line “Privacy Concerns.” We will respond promptly — within 45 days
              at the latest. You may also contact our Data Protection Officer
              directly.
            </SectionDescription>
          </Section>

          <Section>
            <SectionTitle>Dispute resolution process</SectionTitle>
            <SectionDescription>
              In the unlikely event that a dispute arises between you and GitHub
              regarding our handling of your Personal Data, we will do our best
              to resolve it. If we cannot, we have selected JAMS, an independent
              dispute resolution provider, to handle unresolved Privacy Shield
              complaints. If we are unable to resolve your concerns after a good
              faith effort to address them, you may contact JAMS and submit a
              Privacy Shield claim. JAMS is a US-based private alternate dispute
              resolution provider, and we have contracted with JAMS to provide
              an independent recourse mechanism for any of our users for privacy
              concerns at no cost to you. You do not need to appear in court;
              you may conduct this dispute resolution process via telephone or
              video conference. If you are not based in the EU or EEA, but you
              would still like to use the JAMS arbitration process to resolve
              your dispute, please let us know and we will provide access to
              you.
            </SectionDescription>
          </Section>

          <Section>
            <SectionTitle>Independent arbitration</SectionTitle>
            <SectionDescription>
              Under certain limited circumstances, European Union individuals
              may invoke binding Privacy Shield arbitration as a last resort if
              all other forms of dispute resolution have been unsuccessful. To
              learn more about this method of resolution and its availability to
              you, please read more about Privacy Shield. Arbitration is not
              mandatory; it is a tool you can use if you choose to.
            </SectionDescription>
            <SectionDescription>
              We are subject to the jurisdiction of the Federal Trade
              Commission.
            </SectionDescription>
          </Section>

          <Section>
            <SectionTitle>Service Providers</SectionTitle>

            <SectionDescription>
              We may employ third party companies and individuals to facilitate
              our Service ("Service Providers"), to provide the Service on our
              behalf, to perform Service-related services or to assist us in
              analyzing how our Service is used.
            </SectionDescription>

            <SectionDescription>
              These third parties have access to your Personal Data only to
              perform these tasks on our behalf and are obligated not to
              disclose or use it for any other purpose. We may use third-party
              Service Providers to monitor and analyze the use of our Service.
            </SectionDescription>

            <SectionDescription>
              We use Google Analytics, a web analytics service offered by Google
              that tracks and reports website traffic. Google uses the data
              collected to track and monitor the use of our Service. This data
              is shared with other Google services. Google may use the collected
              data to contextualize and personalize the ads of its own
              advertising network.
            </SectionDescription>

            <SectionDescription>
              You can opt-out of having made your activity on the Service
              available to Google Analytics by installing the Google Analytics
              opt-out browser add- on. The add-on prevents the Google Analytics
              JavaScript (ga.js, analytics.js, and dc.js) from sharing
              information with Google Analytics about visits activity.
            </SectionDescription>

            <SectionDescription>
              For more information on the privacy practices of Google, please
              visit the Google{' '}
              <a
                href="http://www.google.com/intl/en/policies/privacy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy &amp; Terms web page
              </a>
              .
            </SectionDescription>

            <SectionDescription>
              We also use Amplitude for tracking internal product analytics
              tracking. You can learn about their privacy practices on their{' '}
              <a
                href="https://amplitude.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy web page
              </a>
              .
            </SectionDescription>

            <SectionDescription>
              We may provide paid products and/or services within the Service.
              In that case, we use third-party services for payment processing
              (e.g. payment processors).
            </SectionDescription>

            <SectionDescription>
              We will not store or collect your payment card details. That
              information is provided directly to our third-party payment
              processors whose use of your personal information is governed by
              their Privacy Policy. These payment processors adhere to the
              standards set by PCI-DSS as managed by the PCI Security Standards
              Council, which is a joint effort of brands like Visa, Mastercard,
              American Express and Discover. PCI-DSS requirements help ensure
              the secure handling of payment information.
            </SectionDescription>

            <SectionDescription>
              We use Stripe as a payment provider. You can find more information
              on their privacy practices on their{' '}
              <a
                href="https://stripe.com/us/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy web page
              </a>
              .
            </SectionDescription>
          </Section>
          <Section>
            <SectionTitle>Links to Other Sites</SectionTitle>

            <SectionDescription>
              Our Service may contain links to other sites that are not operated
              by us. If you click on a third party link, you will be directed to
              that third party’s site. We strongly advise you to review the
              Privacy Policy of every site you visit.
            </SectionDescription>

            <SectionDescription>
              We have no control over and assume no responsibility for the
              content, privacy policies or practices of any third party sites or
              services.
            </SectionDescription>
          </Section>

          <Section>
            <SectionTitle>Children’s Privacy</SectionTitle>

            <SectionDescription>
              Our Service does not address anyone under the age of 13
              (“Children”). If you’re a child under the age of 13, you may not
              have an account on Grindery.
            </SectionDescription>

            <SectionDescription>
              We do not knowingly collect personally identifiable information
              from anyone under the age of 13. If you are a parent or guardian
              and you are aware that your Children has provided us with Personal
              Data, please contact us. If we become aware that we have collected
              Personal Data from children without verification of parental
              consent, we take steps to remove that information from our
              servers.
            </SectionDescription>
          </Section>

          <Section>
            <SectionTitle>Changes to This Privacy Policy</SectionTitle>

            <SectionDescription>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
            </SectionDescription>

            <SectionDescription>
              For material changes to this Privacy Policy, we will notify you
              prior to the change taking effect.
            </SectionDescription>

            <SectionDescription>
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </SectionDescription>
          </Section>

          <Section>
            <SectionTitle>Contact Us</SectionTitle>

            <SectionDescription>
              If you have any questions about this Privacy Policy, please
              contact us by email:{' '}
              <a href="mailto:help@chat.grindery.io">help@chat.grindery.io</a>
            </SectionDescription>
          </Section>
        </ContentContainer>

        <PageFooter />
      </Wrapper>
    );
  }
}
export default Privacy;
