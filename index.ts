import pdfmake from "pdfmake";
import fs from "fs";
import { TDocumentDefinitions } from "pdfmake/interfaces";

const fonts = {
  Helvetica: {
    normal: "Helvetica",
    bold: "Helvetica-Bold",
    italics: "Helvetica-Oblique",
    bolditalics: "Helvetica-BoldOblique",
  },
  Symbol: {
    normal: "Symbol",
  },
  ZapfDingbats: {
    normal: "ZapfDingbats",
  },
};

const printer = new pdfmake(fonts);

const docDefinition: TDocumentDefinitions = {
  // Metadata
  info: {
    title: "Proposal Transmittal Form",
    author: "Tapaj Kumar Das",
    subject: "NA",
    keywords: "UOH, RIMS, Project",
    creator: "RIMS API",
    producer: "RIMS API",
    creationDate: new Date(),
    modDate: new Date(),
  },

  pageSize: "A4",
  pageOrientation: "portrait",
  pageMargins: [40, 60, 40, 60],

  content: [
    // Header row with UOH Logo and other titles
    {
      columns: [
        {
          image: "assets/uoh_logo_transparent.png",
          width: 60,
          height: 60,
          alignment: "left",
        },
        {
          text: "University of Hyderabad",
          alignment: "left",
          fontSize: 20,
          bold: true,
          absolutePosition: {
            x: 100,
            y: 75,
          },
        },
        {
          text: "Research & Development Cell",
          alignment: "left",
          fontSize: 12,
          absolutePosition: {
            x: 100,
            y: 95,
          },
        },
      ],
      marginBottom: 4,
    },
    // Proposal ID and submission date
    {
      text: "For official use only",
      fontSize: 7,
      alignment: "right",
      marginBottom: 2,
    },
    {
      text: "Proposal ID: 00001",
      fontSize: 7,
      alignment: "right",
      marginBottom: 2,
    },
    {
      text: "Submission Date: 19-03-2023",
      fontSize: 7,
      alignment: "right",
      marginBottom: 16,
    },
    // Name of the document
    {
      text: "Proposal Transmittal Form",
      fontSize: 16,
      bold: true,
      alignment: "center",
      marginBottom: 16,
    },
    // Notice
    // TODO: Change this to table layout
    {
      text: "Please submit the final proposal along with the proposal transmittal form, fully signed by all project investigators/co-project investigators, heads and deans to research and development cell at least 5 full working days prior to the submission deadline.",
      fontSize: 8,
      alignment: "center",
      lineHeight: 1.3,
      fillColor: "#f4f4f4",
      marginBottom: 16,
    },
    // Heading 01 - Project Information
    {
      text: "Project Information",
      style: "heading01",
    },
    // Proposal Type
    {
      text: "Proposal Type",
      style: "label01",
    },
    {
      columns: [
        {
          width: 10,
          text: "",
        },
        {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><g fill="none" stroke="#000" stroke-width="10"><circle cx="32" cy="32" r="32" stroke="none"/><circle cx="32" cy="32" r="27" fill="none"/></g></svg>',
          width: 9,
        },
        {
          width: "*",
          text: "Pre-proposal: For preliminary review prior to a formal or new proposal",
        },
      ],
      columnGap: 8,
      style: "notLastTextEntry",
    },
    {
      columns: [
        {
          width: 10,
          text: "",
        },
        {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><g transform="translate(-324 -1376)"><g transform="translate(324 1376)" fill="none" stroke="#000" stroke-width="10"><circle cx="32" cy="32" r="32" stroke="none"/><circle cx="32" cy="32" r="27" fill="none"/></g><g transform="translate(341 1393)" stroke="#000" stroke-width="10"><circle cx="15" cy="15" r="15" stroke="none"/><circle cx="15" cy="15" r="10" fill="none"/></g></g></svg>',
          width: 9,
        },
        {
          width: "*",
          text: "New: Original submission of a full proposal",
        },
      ],
      columnGap: 8,
      style: "lastTextEntry",
    },
    // Project Title
    {
      columns: [
        {
          width: "15%",
          text: "Project Title :",
          style: "boldText",
        },
        {
          width: "80%",
          text: "Changes to properties of FeSO4-ZnO ions under swift heavy irradiation, again and again and again and again and again.",
          style: "regularText",
        },
      ],
      columnGap: 8,
      style: "lastTextEntry",
    },
    // Being submitted on behalf of center or institute
    {
      columns: [
        {
          width: "80%",
          text: "Is the project being submitted on behalf of a center or institute?",
          style: "boldText",
        },
        {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><g fill="none" stroke="#000" stroke-width="10"><circle cx="32" cy="32" r="32" stroke="none"/><circle cx="32" cy="32" r="27" fill="none"/></g></svg>',
          width: 9,
        },
        {
          width: "auto",
          text: "Yes",
          style: "radioButtonText01",
        },
        {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><g transform="translate(-324 -1376)"><g transform="translate(324 1376)" fill="none" stroke="#000" stroke-width="10"><circle cx="32" cy="32" r="32" stroke="none"/><circle cx="32" cy="32" r="27" fill="none"/></g><g transform="translate(341 1393)" stroke="#000" stroke-width="10"><circle cx="15" cy="15" r="15" stroke="none"/><circle cx="15" cy="15" r="10" fill="none"/></g></g></svg>',
          width: 9,
        },
        {
          width: "auto",
          text: "No",
          style: "radioButtonText02",
        },
      ],
      style: "notLastTextEntry",
    },
    // Institutional Project
    {
      columns: [
        {
          width: "80%",
          text: "Is it an institutional project?",
          style: "boldText",
        },
        {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><g fill="none" stroke="#000" stroke-width="10"><circle cx="32" cy="32" r="32" stroke="none"/><circle cx="32" cy="32" r="27" fill="none"/></g></svg>',
          width: 9,
        },
        {
          width: "auto",
          text: "Yes",
          style: "radioButtonText01",
        },
        {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><g transform="translate(-324 -1376)"><g transform="translate(324 1376)" fill="none" stroke="#000" stroke-width="10"><circle cx="32" cy="32" r="32" stroke="none"/><circle cx="32" cy="32" r="27" fill="none"/></g><g transform="translate(341 1393)" stroke="#000" stroke-width="10"><circle cx="15" cy="15" r="15" stroke="none"/><circle cx="15" cy="15" r="10" fill="none"/></g></g></svg>',
          width: 9,
        },
        {
          width: "auto",
          text: "No",
          style: "radioButtonText02",
        },
      ],
      marginBottom: 6,
    },
    // Inter-institutional Project
    {
      columns: [
        {
          width: "80%",
          text: "Is it an inter-institutional project?",
          fontSize: 10,
          bold: true,
        },
        {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><g fill="none" stroke="#000" stroke-width="10"><circle cx="32" cy="32" r="32" stroke="none"/><circle cx="32" cy="32" r="27" fill="none"/></g></svg>',
          width: 9,
        },
        {
          width: "auto",
          text: "Yes",
          style: "radioButtonText01",
        },
        {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><g transform="translate(-324 -1376)"><g transform="translate(324 1376)" fill="none" stroke="#000" stroke-width="10"><circle cx="32" cy="32" r="32" stroke="none"/><circle cx="32" cy="32" r="27" fill="none"/></g><g transform="translate(341 1393)" stroke="#000" stroke-width="10"><circle cx="15" cy="15" r="15" stroke="none"/><circle cx="15" cy="15" r="10" fill="none"/></g></g></svg>',
          width: 9,
        },
        {
          width: "auto",
          text: "No",
          style: "radioButtonText02",
        },
      ],
      style: "lastTextEntry",
    },
    // PI
    {
      columns: [
        {
          width: "25%",
          text: "Principal Investigator :",
          style: "boldText",
        },
        {
          width: "75%",
          text: "Tapaj Kumar Das",
          style: "regularText",
        },
      ],
      columnGap: 8,
      style: "notLastTextEntry",
    },
    // PI School
    {
      columns: [
        {
          width: "25%",
          text: "School :",
          style: "boldText",
        },
        {
          width: "75%",
          text: "School of Information and Computer Sciences",
          style: "regularText",
        },
      ],
      columnGap: 8,
      style: "notLastTextEntry",
    },
    // PI Department
    {
      columns: [
        {
          width: "25%",
          text: "Department :",
          style: "boldText",
        },
        {
          width: "75%",
          text: "Department of Computer Application",
          style: "regularText",
        },
      ],
      columnGap: 8,
      style: "notLastTextEntry",
    },
    // PI Center
    {
      columns: [
        {
          width: "25%",
          text: "Center :",
          style: "boldText",
        },
        {
          width: "75%",
          text: "Not Available",
          style: "regularText",
        },
      ],
      columnGap: 8,
      style: "notLastTextEntry",
    },
    // PI Email
    {
      columns: [
        {
          width: "25%",
          text: "Email :",
          style: "boldText",
        },
        {
          width: "75%",
          text: "tapaj.das@uohyd.ac.in",
          style: "regularText",
        },
      ],
      columnGap: 8,
      style: "notLastTextEntry",
    },
    // PI Contact Number
    {
      columns: [
        {
          width: "25%",
          text: "Contact Number :",
          style: "boldText",
        },
        {
          width: "75%",
          text: "+91-8093897687",
          style: "regularText",
        },
      ],
      columnGap: 8,
      style: "lastTextEntry",
    },
    // Co-project Investigator
    {
      text: "Co-project Investigator(s)",
      style: "label01",
    },
    {
      layout: "lightHorizontalLines",
      table: {
        headerRows: 1,
        widths: ["30%", "20%", "15%", "35%"],
        body: [
          [
            "Collaborator Name",
            "Responsibility",
            "MoU Exists",
            "Collaborating Institute",
          ],
          [
            "Suprava Jena",
            "Analyst",
            "Yes",
            "Jocata Financial Advisory Pvt. Ltd.",
          ],
        ],
      },
      style: "tableWithBottomMargin",
    },
    // Heading 02 - Funding Information
    {
      text: "Funding Information",
      style: "heading01",
    },
    // Funding Agency/Sponsor Name
    {
      columns: [
        {
          width: "35%",
          text: "Funding Agency/Sponsor Name :",
          style: "boldText",
        },
        {
          width: "65%",
          text: "Demo Funding Agency 01",
          style: "regularText",
        },
      ],
      columnGap: 8,
      style: "notLastTextEntry",
    },
    // Does the funding agency limit the number of proposals submitted per institution
    {
      columns: [
        {
          width: "80%",
          text: "Does the funding agency/sponsor limits the number of proposal submitted per institution?",
          style: "boldText",
        },
        {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><g fill="none" stroke="#000" stroke-width="10"><circle cx="32" cy="32" r="32" stroke="none"/><circle cx="32" cy="32" r="27" fill="none"/></g></svg>',
          width: 9,
        },
        {
          width: "auto",
          text: "Yes",
          style: "radioButtonText01",
        },
        {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><g transform="translate(-324 -1376)"><g transform="translate(324 1376)" fill="none" stroke="#000" stroke-width="10"><circle cx="32" cy="32" r="32" stroke="none"/><circle cx="32" cy="32" r="27" fill="none"/></g><g transform="translate(341 1393)" stroke="#000" stroke-width="10"><circle cx="15" cy="15" r="15" stroke="none"/><circle cx="15" cy="15" r="10" fill="none"/></g></g></svg>',
          width: 9,
        },
        {
          width: "auto",
          text: "No",
          style: "radioButtonText02",
        },
      ],
      style: "lastTextEntry",
    },
    // Sponsor deadline
    {
      columns: [
        {
          width: "35%",
          text: "Funding Agency/Sponsor Deadline :",
          style: "boldText",
        },
        {
          width: "65%",
          text: "1st January 2025",
          style: "regularText",
        },
      ],
      columnGap: 8,
      style: "lastTextEntry",
    },
    // Funding Details
    {
      text: "Funding Details",
      style: "label01",
    },
    {
      layout: "lightHorizontalLines",
      table: {
        headerRows: 1,
        widths: ["70%", "30%"],
        body: [
          [
            "Funding Agency/Institute Name",
            {
              text: "Budget",
              alignment: "right",
            },
          ],
          [
            "Demo Funding Agency 01",
            {
              text: 1000000,
              alignment: "right",
            },
          ],
          [
            "UoH Budget",
            {
              text: 100000,
              alignment: "right",
            },
          ],
          [
            "Electronic Arts",
            {
              text: 100000,
              alignment: "right",
            },
          ],
          [
            "",
            {
              text: 1200000,
              bold: true,
              alignment: "right",
            },
          ],
          [
            "UoH Overhead",
            {
              text: "10000",
              alignment: "right",
            },
          ],
        ],
      },
      style: "tableWithBottomMargin",
    },
    // Heading 03 - Approvals
    {
      text: "Approval Information",
      style: "heading01",
    },
    // IEC/AEC/IBC approval required
    {
      columns: [
        {
          width: "80%",
          text: "Does this project require IEC/AEC/IBC approval?",
          style: "boldText",
        },
        {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><g fill="none" stroke="#000" stroke-width="10"><circle cx="32" cy="32" r="32" stroke="none"/><circle cx="32" cy="32" r="27" fill="none"/></g></svg>',
          width: 9,
        },
        {
          width: "auto",
          text: "Yes",
          style: "radioButtonText01",
        },
        {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><g transform="translate(-324 -1376)"><g transform="translate(324 1376)" fill="none" stroke="#000" stroke-width="10"><circle cx="32" cy="32" r="32" stroke="none"/><circle cx="32" cy="32" r="27" fill="none"/></g><g transform="translate(341 1393)" stroke="#000" stroke-width="10"><circle cx="15" cy="15" r="15" stroke="none"/><circle cx="15" cy="15" r="10" fill="none"/></g></g></svg>',
          width: 9,
        },
        {
          width: "auto",
          text: "No",
          style: "radioButtonText02",
        },
      ],
      style: "notLastTextEntry",
    },
    // Human subjects
    {
      columns: [
        {
          width: "80%",
          text: "Does this project involve human subjects? (IEC)",
          style: "boldText",
        },
        {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><g fill="none" stroke="#000" stroke-width="10"><circle cx="32" cy="32" r="32" stroke="none"/><circle cx="32" cy="32" r="27" fill="none"/></g></svg>',
          width: 9,
        },
        {
          width: "auto",
          text: "Yes",
          style: "radioButtonText01",
        },
        {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><g transform="translate(-324 -1376)"><g transform="translate(324 1376)" fill="none" stroke="#000" stroke-width="10"><circle cx="32" cy="32" r="32" stroke="none"/><circle cx="32" cy="32" r="27" fill="none"/></g><g transform="translate(341 1393)" stroke="#000" stroke-width="10"><circle cx="15" cy="15" r="15" stroke="none"/><circle cx="15" cy="15" r="10" fill="none"/></g></g></svg>',
          width: 9,
        },
        {
          width: "auto",
          text: "No",
          style: "radioButtonText02",
        },
      ],
      style: "notLastTextEntry",
    },
    // Animal subjects
    {
      columns: [
        {
          width: "80%",
          text: "Does this project involve animal subjects? (AEC)",
          style: "boldText",
        },
        {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><g fill="none" stroke="#000" stroke-width="10"><circle cx="32" cy="32" r="32" stroke="none"/><circle cx="32" cy="32" r="27" fill="none"/></g></svg>',
          width: 9,
        },
        {
          width: "auto",
          text: "Yes",
          style: "radioButtonText01",
        },
        {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><g transform="translate(-324 -1376)"><g transform="translate(324 1376)" fill="none" stroke="#000" stroke-width="10"><circle cx="32" cy="32" r="32" stroke="none"/><circle cx="32" cy="32" r="27" fill="none"/></g><g transform="translate(341 1393)" stroke="#000" stroke-width="10"><circle cx="15" cy="15" r="15" stroke="none"/><circle cx="15" cy="15" r="10" fill="none"/></g></g></svg>',
          width: 9,
        },
        {
          width: "auto",
          text: "No",
          style: "radioButtonText02",
        },
      ],
      style: "notLastTextEntry",
    },
    // Radioactive material/radiation (IBC)
    {
      columns: [
        {
          width: "80%",
          text: "Does this project involve radioactive material/radiation?",
          style: "boldText",
        },
        {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><g fill="none" stroke="#000" stroke-width="10"><circle cx="32" cy="32" r="32" stroke="none"/><circle cx="32" cy="32" r="27" fill="none"/></g></svg>',
          width: 9,
        },
        {
          width: "auto",
          text: "Yes",
          style: "radioButtonText01",
        },
        {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><g transform="translate(-324 -1376)"><g transform="translate(324 1376)" fill="none" stroke="#000" stroke-width="10"><circle cx="32" cy="32" r="32" stroke="none"/><circle cx="32" cy="32" r="27" fill="none"/></g><g transform="translate(341 1393)" stroke="#000" stroke-width="10"><circle cx="15" cy="15" r="15" stroke="none"/><circle cx="15" cy="15" r="10" fill="none"/></g></g></svg>',
          width: 9,
        },
        {
          width: "auto",
          text: "No",
          style: "radioButtonText02",
        },
      ],
      style: "notLastTextEntry",
    },
    // Biohazard or rDNA
    {
      columns: [
        {
          width: "80%",
          text: "Does this project involve biohazard or rDNA? (IBC)",
          style: "boldText",
        },
        {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><g fill="none" stroke="#000" stroke-width="10"><circle cx="32" cy="32" r="32" stroke="none"/><circle cx="32" cy="32" r="27" fill="none"/></g></svg>',
          width: 9,
        },
        {
          width: "auto",
          text: "Yes",
          style: "radioButtonText01",
        },
        {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><g transform="translate(-324 -1376)"><g transform="translate(324 1376)" fill="none" stroke="#000" stroke-width="10"><circle cx="32" cy="32" r="32" stroke="none"/><circle cx="32" cy="32" r="27" fill="none"/></g><g transform="translate(341 1393)" stroke="#000" stroke-width="10"><circle cx="15" cy="15" r="15" stroke="none"/><circle cx="15" cy="15" r="10" fill="none"/></g></g></svg>',
          width: 9,
        },
        {
          width: "auto",
          text: "No",
          style: "radioButtonText02",
        },
      ],
      style: "lastTextEntry",
    },
    // Heading 04 - Proposed Activities
    {
      text: "Proposed Activity Information",
      style: "heading01",
    },
    {
      columns: [
        {
          width: 10,
          text: "",
        },
        {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><g id="Group_3" data-name="Group 3" transform="translate(-461 -1358)"><g id="Rectangle_2" data-name="Rectangle 2" transform="translate(461 1358)" fill="rgba(255,255,255,0)" stroke="#000" stroke-width="10"><rect width="64" height="64" stroke="none"/><rect x="5" y="5" width="54" height="54" fill="none"/></g><path id="Icon_awesome-check" data-name="Icon awesome-check" d="M12.227,30.9.527,19.2a1.8,1.8,0,0,1,0-2.546L3.073,14.1a1.8,1.8,0,0,1,2.546,0L13.5,21.986,30.382,5.1a1.8,1.8,0,0,1,2.546,0L35.473,7.65a1.8,1.8,0,0,1,0,2.546l-20.7,20.7A1.8,1.8,0,0,1,12.227,30.9Z" transform="translate(475 1372)"/></g></svg>',
          width: 9,
        },
        {
          width: "*",
          text: "Research and Development",
        },
      ],
      columnGap: 8,
      style: "notLastTextEntry",
    },
    {
      columns: [
        {
          width: 10,
          text: "",
        },
        {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><g id="Rectangle_2" data-name="Rectangle 2" fill="rgba(255,255,255,0)" stroke="#000" stroke-width="10"><rect width="64" height="64" stroke="none"/><rect x="5" y="5" width="54" height="54" fill="none"/></g></svg>',
          width: 9,
        },
        {
          width: "*",
          text: "Conducting Training Program",
        },
      ],
      columnGap: 8,
      style: "notLastTextEntry",
    },
    {
      columns: [
        {
          width: 10,
          text: "",
        },
        {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><g id="Rectangle_2" data-name="Rectangle 2" fill="rgba(255,255,255,0)" stroke="#000" stroke-width="10"><rect width="64" height="64" stroke="none"/><rect x="5" y="5" width="54" height="54" fill="none"/></g></svg>',
          width: 9,
        },
        {
          width: "*",
          text: "Conducting Conference/workshop/training program",
        },
      ],
      columnGap: 8,
      style: "notLastTextEntry",
    },
    {
      columns: [
        {
          width: 10,
          text: "",
        },
        {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><g id="Rectangle_2" data-name="Rectangle 2" fill="rgba(255,255,255,0)" stroke="#000" stroke-width="10"><rect width="64" height="64" stroke="none"/><rect x="5" y="5" width="54" height="54" fill="none"/></g></svg>',
          width: 9,
        },
        {
          width: "*",
          text: "Conducting clinical trail",
        },
      ],
      columnGap: 8,
      style: "lastTextEntry",
    },
    // Declaration
    {
      table: {
        headerRows: 0,
        widths: ["*"],
        body: [
          [
            {
              text: "The information contained on this form and the corresponding proposal is true and complete. I don't expect the University to share in any additional expenses to execute the project. If the project is funded, I will accept the responsibility for the scientific conduct of the project and will administer the project in accordance with the terms and conditions of the grant or contract including the fulfillment of reporting requirements indicated by the funding agency.",
              fontSize: 8,
              margin: 8,
            },
          ],
        ],
      },
      marginTop: 16,
      marginBottom: 32,
    },
    // Signatures
    {
      columns: [
        {
          width: "33%",
          text: "",
        },
        {
          width: "33%",
          text: "",
        },
        {
          width: "33%",
          text: "_________________________",
          alignment: "center",
        },
      ],
      marginBottom: 4,
    },
    {
      columns: [
        {
          width: "33%",
          text: "",
        },
        {
          width: "33%",
          text: "",
        },
        {
          width: "33%",
          text: "Signature of Principal Investigator",
          alignment: "center",
        },
      ],
      marginBottom: 32,
    },
    {
      columns: [
        {
          width: "33%",
          text: "_________________________",
          alignment: "center",
        },
        {
          width: "33%",
          text: "",
        },
        {
          width: "33%",
          text: "_________________________",
          alignment: "center",
        },
      ],
      columnGap: 10,
      marginBottom: 4,
    },
    {
      columns: [
        {
          width: "33%",
          text: "Signature of Head of the Academic unit of PI",
          alignment: "center",
        },
        {
          width: "33%",
          text: "",
        },
        {
          width: "33%",
          text: "Signature of Dean of the School of PI",
          alignment: "center",
        },
      ],
      columnGap: 10,
      marginBottom: 32,
    },
    {
      columns: [
        {
          width: "33%",
          text: "_________________________",
          alignment: "center",
        },
        {
          width: "33%",
          text: "_________________________",
          alignment: "center",
        },
        {
          width: "33%",
          text: "_________________________",
          alignment: "center",
        },
      ],
      columnGap: 10,
      marginBottom: 4,
    },
    {
      columns: [
        {
          width: "33%",
          text: "Signature of Co-PI",
          alignment: "center",
        },
        {
          width: "33%",
          text: "Signature of Head of the Academic unit of Co-PI",
          alignment: "center",
        },
        {
          width: "33%",
          text: "Signature of Dean of the School of Co-PI",
          alignment: "center",
        },
      ],
      columnGap: 10,
      marginBottom: 32,
    },
    // Director and RDC signature
    {
      layout: {
        hLineColor: function (i, node) {
          return i === 0 || i === node.table.body.length ? "black" : "#ffffff";
        },
        vLineColor: function (i, node) {
          return i === 0 || i === node.table!.widths!.length
            ? "black"
            : "#ffffff";
        },
      },
      table: {
        headerRows: 0,
        widths: ["100%"],
        body: [
          [
            {
              text: "The proposal appears to be complete and accurate representation of the project. The budget confirms to University policies. I recommend/approve the submission of this proposal to the designated funding agency.",
              alignment: "justify",
              marginTop: 10,
              marginLeft: 20,
              marginRight: 20,
              marginBottom: 10,
            },
          ],
          [
            {
              text: "Director",
              alignment: "right",
              marginLeft: 20,
              marginRight: 20,
            },
          ],
          [
            {
              text: "RDC",
              alignment: "right",
              marginBottom: 10,
              marginLeft: 20,
              marginRight: 20,
            },
          ],
        ],
      },
      marginBottom: 32,
    },
    {
      layout: {
        hLineColor: function (i, node) {
          return i === 0 || i === node.table.body.length ? "black" : "#ffffff";
        },
        vLineColor: function (i, node) {
          return i === 0 || i === node.table!.widths!.length
            ? "black"
            : "#ffffff";
        },
      },
      table: {
        headerRows: 0,
        widths: ["100%"],
        body: [
          [
            {
              text: "I recommend/approve the submission of this proposal to the designated funding agency.",
              alignment: "justify",
              marginTop: 10,
              marginLeft: 20,
              marginRight: 20,
              marginBottom: 10,
            },
          ],
          [
            {
              text: "Registrar",
              alignment: "right",
              marginBottom: 10,
              marginLeft: 20,
              marginRight: 20,
            },
          ],
        ],
      },
      marginBottom: 32,
    },
    {
      layout: {
        hLineColor: function (i, node) {
          return i === 0 || i === node.table.body.length ? "black" : "#ffffff";
        },
        vLineColor: function (i, node) {
          return i === 0 || i === node.table!.widths!.length
            ? "black"
            : "#ffffff";
        },
      },
      table: {
        headerRows: 0,
        widths: ["100%"],
        body: [
          [
            {
              text: "I recommend/approve the submission of this proposal to the designated funding agency.",
              alignment: "justify",
              marginTop: 10,
              marginLeft: 20,
              marginRight: 20,
              marginBottom: 10,
            },
          ],
          [
            {
              text: "Vice-Chancellor",
              alignment: "right",
              marginBottom: 10,
              marginLeft: 20,
              marginRight: 20,
            },
          ],
        ],
      },
      marginBottom: 32,
    },
  ],
  defaultStyle: {
    font: "Helvetica",
    fontSize: 10,
  },
  styles: {
    heading01: {
      fontSize: 12,
      bold: true,
      marginBottom: 16,
    },
    label01: {
      fontSize: 10,
      bold: true,
      marginBottom: 10,
    },
    notLastTextEntry: {
      marginBottom: 6,
    },
    lastTextEntry: {
      marginBottom: 12,
    },
    regularText: {
      fontSize: 10,
      bold: false,
    },
    radioButtonText01: {
      fontSize: 10,
      marginLeft: 4,
      marginRight: 8,
    },
    radioButtonText02: {
      fontSize: 10,
      marginLeft: 4,
    },
    boldText: {
      fontSize: 10,
      bold: true,
    },
    noticeText: {
      fontSize: 6,
      marginTop: 16,
      marginBottom: 16,
    },
    tableWithBottomMargin: {
      marginBottom: 16,
    },
  },
};

const pdfDocument = printer.createPdfKitDocument(docDefinition);

pdfDocument.pipe(fs.createWriteStream("document.pdf"));
pdfDocument.end();
