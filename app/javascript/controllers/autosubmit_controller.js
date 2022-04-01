import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="autosubmit"
export default class extends Controller {
  static targets = ["submitbutton"]
  connect() {
    console.log("autosubmit connected")
    this.submitbuttonTarget.hidden = true
  }
  
  submit() {
    // this.submitbuttonTarget.click()
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      this.submitbuttonTarget.click()
    }, 500)
  }
}
