import { Component, OnInit } from '@angular/core';
import apis, { addApiInfo } from '../../assets/apidata'
import * as XLSX from 'xlsx';
import { Url } from 'url';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  constructor() { }

  fileToUpload: File = null;
  fileType: string[];
  selectedType: string;
  check: any;
  endurl: string = "";
  type: string;
  params: any;
  response: string;
  displayUrlInfo: boolean = false;
  apiInfo: string;
  headerstring: string;
  projectnames: any;
  apidata: any;
  projectapilist: any;
  expandedList: any;
  name: string;
  apiname: string;
  displayModal: boolean = false;
  statusInfo: string = "";
  options: any;

  projectname: string;
  api: string;
  url: string;
  headers: any;
  method: string;
  body: any;
  description: any;
  errormessage: string;

  file: any;
  fileData: any;

  postmanurl: string = "https://www.postman.com/collections/26bf815f8a712b3358d3";
  postmanData: any;
  displayCollection: boolean = false;

  ngOnInit() {
    this.apidata = apis['apis'];
    this.getProjectLists();
  }

  // uploadFileToActivity() {
  //   // debugger;
  //   this.FileUploadService.postFile(this.fileToUpload).subscribe(data => {
  //     // do something, if upload success
  //     console.log("UPLOAD SUCCESS!!")
  //     }, error => {
  //       console.log(error);
  //     });
  // }

  // insert_new() {
  //   console.log("Inside Function")
  //   this.projectName.value;
  //   //str_Project_Name,  str_Uploaded_By,  str_File_Name,  str_File_Type,  str_URL,  str_Checker,  str_Checked_YN,  str_Multiple_Version_YN,  str_Description

  //   this.FileUploadService.checkFile(this.fileName.value).subscribe(
  //     (res: any) => {
  //       console.log("inside response")
  //       if (!res.checkResult) {
  //         console.log("RESULT = ", res.checkResult)
  //         this.FileUploadService.insertNew(this.projectName.value, "abcd", this.fileName.value, this.selectedType, this.url.value, this.checker.value, "Y", "N", this.description.value).subscribe(
  //           (res: any) => { },
  //           err => { console.log(err) });
  //       }
  //       else {
  //         console.log("RESULT = ", res.checkResult)
  //         this.FileUploadService.insertModified("abcd", "abcd", this.url.value, this.checker.value, "N", this.description.value, this.fileName.value, this.projectName.value, this.selectedType).subscribe(
  //           (res: any) => { },
  //           err => { console.log(err) });
  //       }
  //     },
  //     err => { console.log(err) }
  //   );
  //   console.log("end of  Function")

  // }

  addAPI() {
    const apidata = {
      "url": this.url,
      "method": this.method,
      "header": this.headers,
      "body": this.body,
      "description": this.description
    }
    const apiname = this.api;
    let errormessage: string;

    if (this.projectnames.includes(this.projectname)) {
      console.log(this.projectnames.includes(this.projectname))
      Object.keys(this.apidata[0][this.projectname]).forEach(function (key) {
        if (key === apiname) {
          errormessage = "same api name";
          console.error("same api name");
        }
      })
      if (errormessage) {
        this.errormessage = errormessage;
        return;
      }
      this.apidata[0][this.projectname][apiname] = apidata
      // this.apidata[0][this.projectname]
    } else {
      let apibody = {};
      apibody[apiname] = apidata;
      this.apidata[0][this.projectname] = apibody;
    }
    addApiInfo(this.apidata)
    this.getProjectLists()
  }

  // toggleInfo() {
  //   this.displayUrlInfo = false;
  //   var obj = JSON.parse(this.params);
  //   this.params = JSON.stringify(obj, null, 2);
  // }

  displayInfo() {
    this.displayUrlInfo = !this.displayUrlInfo;
  }

  fetchURL(options) {
    let fpres = this.type == 'GET' ? fetch(this.endurl) : fetch(this.endurl, options);
    fpres
      .then((response) => response.text())
      .then(data => {
        this.response = data;
        console.log('Success:');
      });
    const start = new Date();
    fpres.then(response => {
      const end = new Date();
      this.statusInfo = response.status + "  " + response.statusText + "  " + (end.getTime() - start.getTime()).toString() + "ms";
    })
  }

  fileChanged(e) {
    this.file = e.target.files[0];
    this.uploadFile(this.file);
  }

  getProjectLists() {
    let data = [];
    let expobj = [];
    let project_api = {};
    let api = [];
    this.apidata.map((project) => {
      Object.keys(project).forEach(function (key) {
        data.push(key);
        expobj.push({
          key: false
        })
        console.log('Key: ' + key);
        // name = key;
        Object.keys(project[key]).forEach(function (key) {
          console.log('Value: ' + key);
          api.push(key);
        })
        project_api[key] = api;
        api = [];
      })
    })
    this.projectapilist = project_api;

    this.expandedList = expobj;
    this.projectnames = data;
    console.log(this.projectnames, this.projectapilist);
  }

  get_URL(name: string, api: string) {
    this.name = name ? name : this.name;
    this.apiname = api ? api : this.apiname;
    const apidata = this.apidata[0][this.name][this.apiname];
    console.log(apis);
    this.type = apidata['method'];
    this.params = String(apidata['body']);
    const headers = apidata['header'];
    this.endurl = apidata['url'];

    let options = {
      method: this.type,
      headers: headers,
      body: this.params
    }
    this.options = options;
    this.fetchURL(options)
    this.apiInfo = JSON.stringify(apidata['description'], null, 2);
  }

  get_postmanURL(api: any) {
    this.type = api.request.method;
    this.params = api.request.body ? api.request.body.raw : null;
    this.endurl = api.request.url;
    var httpHeaders = { 'Content-Type': 'application/' + api.request.body.options.raw.language, 'Accept': '*/*', 'Connection': 'keep-alive', 'Accept-Encoding': 'gzip, deflate, br' };
    var header = new Headers(httpHeaders);
    let options = {
      method: this.type,
      headers: header,
      body: this.params
    }
    this.options = options;
    this.fetchURL(options)
  }

  postmanURL() {
    fetch(this.postmanurl)
      .then((response) => response.json())
      .then(data => {
        this.postmanData = data;
        console.log('Success:', this.postmanData);
        // console.log(this.postmanData.item[0].request.body.raw)
      });
  }

  toggleList(name: string) {
    this.expandedList[name] = !this.expandedList[name];
  }

  toggleModal() {
    this.displayModal = !this.displayModal;
    this.url = "";
    this.method = "";
    this.headers = "";
    this.body = "";
    this.description = "";
    this.api = "";
    this.projectname = "";
  }

  toggleCollection() {
    this.displayCollection = !this.displayCollection
  }

  uploadFile(file) {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.fileData = fileReader.result;
      var data = new Uint8Array(this.fileData);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      this.fileData = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      // this.fileData = JSON.stringify(XLSX.utils.sheet_to_json(worksheet, { raw: true }), null, 2);
    }
    fileReader.readAsArrayBuffer(this.file);
    fileReader.onloadend = (e) => {
      addApiInfo(this.fileData)
      console.log(this.fileData)
      this.apidata = this.fileData;
      // this.getProjectLists()
    }
  }

  //POST
  // http://dummy.restapiexample.com/api/v1/create
  // {"name":"test","salary":"123","age":"23"}

}


