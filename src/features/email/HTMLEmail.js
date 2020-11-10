import { buildEventTimeString } from '../email/EmailEvent'

import {
  EMAIL_LOGO_IMG_URL,
  SOCIAL_1,
  SOCIAL_2,
  SOCIAL_3,
  SOCIAL_1_URL,
  SOCIAL_2_URL,
  SOCIAL_3_URL,
  SOCIAL_1_IMG_URL,
  SOCIAL_2_IMG_URL,
  SOCIAL_3_IMG_URL,
  ORGANIZATION_URL
} from '../../email-generator.config'

export function makeEmail (title, subTitle, events) {
  return `
  <!DOCTYPE html>
  <html
    lang="en"
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
  >
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="x-apple-disable-message-reformatting" />
      <title>Events this week</title>
      <!-- The title tag shows in email notifications, like Android 4.4. -->
      <link
        href="https://fonts.googleapis.com/css?family=Work+Sans:200,300,400,500,600,700"
        rel="stylesheet"
      />
      <!-- CSS Reset : BEGIN -->
      <style>
        body,
        html {
          margin: 0 auto !important;
          padding: 0 !important;
          height: 100% !important;
          width: 100% !important;
        }
        * {
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
        }
        div[style*="margin: 16px 0"] {
          margin: 0 !important;
        }
        table,
        td {
          mso-table-lspace: 0 !important;
          mso-table-rspace: 0 !important;
        }
        table {
          border-spacing: 0 !important;
          border-collapse: collapse !important;
          table-layout: fixed !important;
          margin: 0 auto !important;
        }
        img {
          -ms-interpolation-mode: bicubic;
        }
        a {
          text-decoration: none;
        }
        .aBn,
        .unstyle-auto-detected-links *,
        [x-apple-data-detectors] {
          border-bottom: 0 !important;
          cursor: default !important;
          color: inherit !important;
          text-decoration: none !important;
          font-size: inherit !important;
          font-family: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
        }
        .a6S {
          display: none !important;
          opacity: 0.01 !important;
        }
        .im {
          color: inherit !important;
        }
        img.g-img + div {
          display: none !important;
        }
        @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
          u ~ div .email-container {
            min-width: 320px !important;
          }
        }
        @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
          u ~ div .email-container {
            min-width: 375px !important;
          }
        }
        @media only screen and (min-device-width: 414px) {
          u ~ div .email-container {
            min-width: 414px !important;
          }
        }
        .bg_white {
          background: #fff;
        }
        .bg_light {
          background: #fff;
        }
        .bg_black {
          background: #000;
        }
        .bg_dark {
          background: rgba(0, 0, 0, 0.8);
        }
        .email-section {
          padding: 2.5em;
        }
        .btn {
          padding: 5px 15px;
          display: inline-block;
        }
        .btn.btn-primary {
          border-radius: 5px;
          background: #2f89fc;
          color: #fff;
        }
        .btn.btn-white {
          border-radius: 5px;
          background: #fff;
          color: #000;
        }
        .btn.btn-white-outline {
          border-radius: 5px;
          background: 0 0;
          border: 1px solid #fff;
          color: #fff;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: "Work Sans", sans-serif;
          color: #000;
          margin-top: 0;
          font-weight: 400;
        }
        body {
          font-family: "Work Sans", sans-serif;
          font-weight: 400;
          font-size: 15px;
          line-height: 1.8;
          color: rgba(0, 0, 0, 0.8);
        }
        a {
          color: #2f89fc;
        }
        .logo h1 {
          margin: 0;
        }
        .logo h1 a {
          color: #000;
          font-size: 20px;
          font-weight: 700;
          text-transform: uppercase;
          font-family: Poppins, sans-serif;
        }
        .navigation {
          padding: 0;
        }
        .navigation li {
          list-style: none;
          display: inline-block;
          margin-left: 5px;
          font-size: 13px;
          font-weight: 500;
        }
        .navigation li a {
          color: rgba(0, 0, 0, 0.4);
        }
        .hero {
          position: relative;
          z-index: 0;
        }
        .hero .text {
          color: rgba(0, 0, 0, 0.3);
        }
        .hero .text h2 {
          color: #000;
          font-size: 30px;
          margin-bottom: 0;
          font-weight: 300;
        }
        .hero .text h2 span {
          font-weight: 600;
          color: #2f89fc;
        }
        .heading-section h2 {
          color: #000;
          font-size: 28px;
          margin-top: 0;
          line-height: 1.4;
          font-weight: 400;
        }
        .heading-section .subheading {
          margin-bottom: 20px !important;
          display: inline-block;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: rgba(0, 0, 0, 0.4);
          position: relative;
        }
        .heading-section .subheading::after {
          position: absolute;
          left: 0;
          right: 0;
          bottom: -10px;
          content: "";
          width: 100%;
          height: 2px;
          background: #2f89fc;
          margin: 0 auto;
        }
        .heading-section-white {
          color: rgba(255, 255, 255, 0.8);
        }
        .heading-section-white h2 {
          line-height: 1;
          padding-bottom: 0;
        }
        .heading-section-white h2 {
          color: #fff;
        }
        .heading-section-white .subheading {
          margin-bottom: 0;
          display: inline-block;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: rgba(255, 255, 255, 0.4);
        }
        .text-project {
          padding-top: 10px;
        }
        .text-project h3 {
          margin-bottom: 0;
        }
        .text-project h3 a {
          color: #000;
        }
        .footer {
          color: rgba(255, 255, 255, 0.5);
        }
        .footer .heading {
          color: #fff;
          font-size: 20px;
        }
        .footer ul {
          margin: 0;
          padding: 0;
        }
        .footer ul li {
          list-style: none;
          margin-bottom: 10px;
        }
        .footer ul li a {
          color: rgba(255, 255, 255, 1);
        }
  
        h1 {
          font-size: 50px;
          font-weight: 800;
          margin-bottom: 0;
        }
        h2 {
          font-size: 35px;
          font-weight: 400;
        }
        h3 {
          font-size: 30px;
          font-weight: 400;
        }
      </style>
    </head>
    <body
      width="100%"
      style="
        margin: 0;
        padding: 0 !important;
        mso-line-height-rule: exactly;
        background-color: white;
      "
    >
      <center style="width: 100%; background-color: white">
        <div style="max-width: 600px; margin: 0px auto" class="email-container">
          <table
            role="presentation"
            style="margin: auto"
            width="100%"
            cellspacing="0"
            cellpadding="0"
            border="0"
            align="center"
          >
            <tbody>
              <tr>
                <td class="bg_white" valign="top">
                  <table
                    role="presentation"
                    width="100%"
                    cellspacing="0"
                    cellpadding="0"
                    border="0"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <div
                            style="
                              padding: 5px;
                              background-color: rgb(210, 40, 32);
                            "
                          >
                            <img
                              src="${EMAIL_LOGO_IMG_URL}"
                              alt="Fightback"
                              style="
                                width: 100%;
                                height: auto;
                                margin: auto;
                                display: block;
                              "
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="text" style="text-align: center">
                    <h1 class="title is-1">
                            ${title}
                     </h1>
                     </div>
                  </td>
               </tr>
               <tr>
                  <td>
                     <div class="text" style="text-align: center">
                     <h2 class="subtitle is-3">
                            ${subTitle}
                     </h2>
                     </div>
                  </td>
               </tr>

            ${events.map(
              event => `
               <tr>
               <td style="padding: 20px">
                  <img
                     src="${
                       event.image
                         ? event.image
                         : 'https://via.placeholder.com/480x240'
                     }" 
                           alt=""
                           style="
                              width: 100%;
                              max-width: 600px;
                              height: auto;
                              margin: auto;
                              display: block;
                           "
                        />
                        <div>
                           <h3 style="text-align: center">
                              <div><h3>${event.title}</div>
                           </h3>
                        </div>
                        <div>
                        ${event.dates.map(
                          (date, index) =>
                            `<p>
                              <b>
                              ${
                                event.dates.length === 1
                                  ? 'WHEN:'
                                  : 'DAY ' + (index + 1)
                              }
                              </b>&nbsp;
                              ${buildEventTimeString(date)}
                           </p>
                           `
                        )}
                           <p><b>WHERE:</b>&nbsp;${
                             event.location ? event.location : 'TBD'
                           } </p>
                           <p style="white-space: pre-line;">${
                             event.description
                               ? event.description
                               : 'Description'
                           }</p>
                        </div>
                  </td>
               </tr>
               `
            )}
                  
               </tbody>
            </table>
            <br />
            <div
               style="
                  height: 70px;
                  background-color: rgb(210, 40, 32);
                  padding: 20px;
                  color: white;
               "
            >
               <table
                  role="presentation"
                  width="100%"
                  height="100%"
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
               >
                  <tbody>
                  <tr>
                     <td style="vertical-align: middle">
                        <a
                        href="${ORGANIZATION_URL}"
                        style="color: black; text-align: center"
                        >${ORGANIZATION_URL}</a>
                  </td>
                <td style="vertical-align: middle" width="15%" align="right">
                  <a href="${SOCIAL_1_URL}"
                    ><img
                      src="${SOCIAL_1_IMG_URL}"
                      alt="${SOCIAL_1}"
                      style="display: block"
                      width="38"
                      height="38"
                      border="0"
                  /></a>
                </td>
                <td style="vertical-align: middle" width="15%" align="right">
                  <a href="${SOCIAL_2_URL}"
                    ><img
                      src="${SOCIAL_2_IMG_URL}"
                      alt="${SOCIAL_2}"
                      style="display: block"
                      width="38"
                      height="38"
                      border="0"
                  /></a>
                </td>
                <td style="vertical-align: middle" width="15%" align="right">
                  <a href="${SOCIAL_3_URL}"
                    ><img
                      src="${SOCIAL_3_IMG_URL}"
                      alt="${SOCIAL_3}"
                      style="display: block"
                      width="38"
                      height="38"
                      border="0"
                  /></a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </center>
  </body>
</html>
`
}
