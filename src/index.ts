import { createTemplate } from "./template";

const WC_TAG_NAME = "ppc-widget";

export default function createComponent(greeting: string) {
  const template = createTemplate(greeting);

  class PPCWidgetElement extends HTMLElement {
    constructor() {
      super();
      const shadowDOM = this.attachShadow({ mode: "open" });
      // Render the template in the shadow dom
      shadowDOM.appendChild(template.content.cloneNode(true));
    }
    get greeting(): string {
      const greetingEl = this.shadowRoot?.querySelector(".greeting");
      return greetingEl?.textContent || "";
    }

  
    
    set greeting(val: string) {
      const range1txt = this.shadowRoot?.querySelector("#ppc_w_range1txt");
      const range1 = this.shadowRoot?.querySelector("#ppc_w_range1");

      const range2txt = this.shadowRoot?.querySelector("#ppc_w_range2txt");
      const range2 = this.shadowRoot?.querySelector("#ppc_w_range2");

      const range3txt = this.shadowRoot?.querySelector("#ppc_w_range3txt");
      const range3 = this.shadowRoot?.querySelector("#ppc_w_range3");

      const range4txt = this.shadowRoot?.querySelector("#ppc_w_range4txt");
      const range4 = this.shadowRoot?.querySelector("#ppc_w_range4");

      const range5txt = this.shadowRoot?.querySelector("#ppc_w_range5txt");
      const range5 = this.shadowRoot?.querySelector("#ppc_w_range5");

      //TODO Set Value
      const visits = this.shadowRoot?.querySelector("#ppc_w_visits");
      const leads = this.shadowRoot?.querySelector("#ppc_w_leads");
      const cpltt = this.shadowRoot?.querySelector("#ppc_w_cpltt");
      const sales = this.shadowRoot?.querySelector("#ppc_w_sales");
      const cps = this.shadowRoot?.querySelector("#ppc_w_cps");
      const revenue = this.shadowRoot?.querySelector("#ppc_w_revenue");
      const profit = this.shadowRoot?.querySelector("#ppc_w_profit");
      const monthly_roi = this.shadowRoot?.querySelector("#ppc_w_monthly_roi");

      const monthlyfee = this.shadowRoot?.querySelector("#ppc_w_monthlyfee");
      const onetime_setup = this.shadowRoot?.querySelector("#ppc_w_onetime_setup");

      let tt = JSON.parse(greeting);
      range1?.addEventListener("change", (ev) => {
        let ran1 = parseFloat((<HTMLInputElement>range1).value);
        let ran2 = parseFloat((<HTMLInputElement>range2).value);
        let ran3 = parseFloat((<HTMLInputElement>range3).value);
        let ran4 = parseFloat((<HTMLInputElement>range4).value);
        let ran5 = parseFloat((<HTMLInputElement>range5).value);
        
        if (range1txt) {
          range1txt.textContent = ran1.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "0";
        }

        

        if (monthlyfee && onetime_setup) {
          let montlyfee = 0;
          let onetimefee = 0;
          if(ran1 <= tt.montly_mfee[0].max){
            montlyfee = ran1 * tt.montly_mfee[0].multipal;
            onetimefee = tt.montly_mfee[0].setupfee;
          }else if(ran1 >= tt.montly_mfee[1].min && ran1 <= tt.montly_mfee[1].max){
            montlyfee = ran1 * tt.montly_mfee[1].multipal;
            onetimefee = tt.montly_mfee[1].setupfee;
          }else if(ran1 >= tt.montly_mfee[2].min && ran1 <= tt.montly_mfee[2].max){
            montlyfee = ran1 * tt.montly_mfee[2].multipal;
            onetimefee = tt.montly_mfee[2].setupfee;
          }else if(ran1 >= tt.montly_mfee[3].min){
            montlyfee = ran1 * tt.montly_mfee[3].multipal;
            onetimefee = tt.montly_mfee[3].setupfee;
          }
          monthlyfee.textContent = montlyfee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "0";
          onetime_setup.textContent = onetimefee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "0";
        }

        let monthlyfee_txt = monthlyfee?.innerHTML || 0;
        let new_monthlyfee = parseFloat(monthlyfee_txt?.toString().trim().replace(",",""));

        if (visits) {
          visits.textContent =
            (Math.round((ran1 / ran2) * 100) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "0";
        }

        let visits_txt = visits?.innerHTML || 0;
        let new_visit = parseFloat(visits_txt?.toString().trim().replace(",",""));
        if (leads) {
          leads.textContent =
            (Math.round(ran3 * new_visit) / 100).toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "0";
        }

        let leads_txt = leads?.innerHTML || 0;
        let new_leads = parseFloat(leads_txt?.toString().trim().replace(",",""));
        if (cpltt) {
          cpltt.textContent = (Math.round((ran1 / new_leads) * 100) / 100).toString() || "0";
        }

        if(sales){
          sales.textContent =
          (Math.round((ran4*new_leads)) / 100).toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "0";
        }

        let sales_txt = sales?.innerHTML || 0;
        let new_sales = parseFloat(sales_txt?.toString().trim().replace(",",""));
        if(revenue){
          revenue.textContent =
          (Math.round((ran5*new_sales) *100) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "0";
        }

        let revenue_txt = revenue?.innerHTML || 0;
        let new_revenue = parseFloat(revenue_txt?.toString().trim().replace(",",""));

        
        if(profit){
          profit.textContent =
          ((new_revenue-ran1-new_monthlyfee)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "0";
        }

        if(monthly_roi){
          monthly_roi.textContent =
          (((new_revenue-(ran1+new_monthlyfee))/(ran1+new_monthlyfee)*1)*100).toFixed(0) || "0";
        }
      });

      range2?.addEventListener("change", (ev) => {
        let ran1 = parseFloat((<HTMLInputElement>range1).value);
        let ran2 = parseFloat((<HTMLInputElement>range2).value);
        let ran3 = parseFloat((<HTMLInputElement>range3).value);
        let ran4 = parseFloat((<HTMLInputElement>range4).value);
        let ran5 = parseFloat((<HTMLInputElement>range5).value);
        let monthlyfee_txt = monthlyfee?.innerHTML || 0;
        let new_monthlyfee = parseFloat(monthlyfee_txt?.toString().trim().replace(",",""));

        if (range2txt) {
          range2txt.textContent = ran2.toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "0";
        }


        if (visits) {
          visits.textContent =
            (Math.round((ran1 / ran2) * 100) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "0";
        }
        let visits_txt = visits?.innerHTML || 0;
        let new_visit = parseFloat(visits_txt?.toString().trim().replace(",",""));
        if (leads) {
          leads.textContent =
            (Math.round(ran3 * new_visit) / 100).toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "0";
        }

        let leads_txt = leads?.innerHTML || 0;
        let new_leads = parseFloat(leads_txt?.toString().trim().replace(",",""));
        if (cpltt) {
          cpltt.textContent =
            (Math.round((ran1 / new_leads) * 100) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "0";
        }

        if(sales){
          sales.textContent =
          (Math.round((ran4*new_leads)) / 100).toFixed(1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "0";
        }

        let sales_txt = sales?.innerHTML || 0;
        let new_sales = parseFloat(sales_txt?.toString().trim().replace(",",""));
        if(cps){
          cps.textContent =
          (Math.round((ran1/new_sales)*100) / 100).toFixed(1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "0";
        }

        if(revenue){
          revenue.textContent =
          (Math.round((ran5*new_sales) *100) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "0";
        }

        let revenue_txt = revenue?.innerHTML || 0;
        let new_revenue = parseFloat(revenue_txt?.toString().trim().replace(",",""));

        if(profit){
          profit.textContent =
          ((new_revenue-ran1-new_monthlyfee)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "0";
        }

        if(monthly_roi){
          monthly_roi.textContent =
          (((new_revenue-(ran1+new_monthlyfee))/(ran1+new_monthlyfee)*1)*100).toFixed(0) || "0";
        }
      });
      range3?.addEventListener("change", (ev) => {
        let ran1 = parseFloat((<HTMLInputElement>range1).value);
        let ran3 = parseFloat((<HTMLInputElement>range3).value);
        let ran4 = parseFloat((<HTMLInputElement>range4).value);
        let ran5 = parseFloat((<HTMLInputElement>range5).value);
        let monthlyfee_txt = monthlyfee?.innerHTML || 0;
        let new_monthlyfee = parseFloat(monthlyfee_txt?.toString().trim().replace(",",""));

        if (range3txt) {
          range3txt.textContent = ran3.toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "0";
        }


        let visits_txt = visits?.innerHTML || 0;
        let new_visit = parseFloat(visits_txt?.toString().trim().replace(",",""));
        if (leads) {
          leads.textContent =
            (Math.round(ran3 * new_visit) / 100).toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "0";
        }

        let leads_txt = leads?.innerHTML || 0;
        let new_leads = parseFloat(leads_txt?.toString().trim().replace(",",""));
        if (cpltt) {
          cpltt.textContent =
            (Math.round((ran1 / new_leads) * 100) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "0";
        }

        if(sales){
          sales.textContent =
          (Math.round((ran4*new_leads)) / 100).toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "0";
        }
        
        let sales_txt = sales?.innerHTML || 0;
        let new_sales = parseFloat(sales_txt?.toString().trim().replace(",",""));
        if(cps){
          cps.textContent =
          (Math.round((ran1/new_sales)*100) / 100).toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "0";
        }

        if(revenue){
          revenue.textContent =
          (Math.round((ran5*new_sales) *100) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "0";
        }

        let revenue_txt = revenue?.innerHTML || 0;
        let new_revenue = parseFloat(revenue_txt?.toString().trim().replace(",",""));

        if(profit){
          profit.textContent =
          ((new_revenue-ran1-new_monthlyfee)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "0";
        }

        if(monthly_roi){
          monthly_roi.textContent =
          (((new_revenue-(ran1+new_monthlyfee))/(ran1+new_monthlyfee)*1)*100).toFixed(0) || "0";
        }
      });
      range4?.addEventListener("change", (ev) => {
        let ran1 = parseFloat((<HTMLInputElement>range1).value);
        let ran4 = parseFloat((<HTMLInputElement>range4).value);
        let ran5 = parseFloat((<HTMLInputElement>range5).value);
        let monthlyfee_txt = monthlyfee?.innerHTML || 0;
        let new_monthlyfee = parseFloat(monthlyfee_txt?.toString().trim().replace(",",""));

        if (range4txt) {
          range4txt.textContent = ran4.toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "0";
        }


        let leads_txt = leads?.innerHTML || 0;
        let new_leads = parseFloat(leads_txt?.toString().trim().replace(",",""));
        if(sales){
          sales.textContent =
          (Math.round((ran4*new_leads)) / 100).toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "0";
        }

        let sales_txt = sales?.innerHTML || 0;
        let new_sales = parseFloat(sales_txt?.toString().trim().replace(",",""));
        if(cps){
          cps.textContent =
          (Math.round((ran1/new_sales)*100) / 100).toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "0";
        }

        if(revenue){
          revenue.textContent =
          (Math.round((ran5*new_sales) *100) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "0";
        }

        let revenue_txt = revenue?.innerHTML || 0;
        let new_revenue = parseFloat(revenue_txt?.toString().trim().replace(",",""));

        if(profit){
          profit.textContent =
          ((new_revenue-ran1-new_monthlyfee)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "0";
        }

        if(monthly_roi){
          monthly_roi.textContent =
          (((new_revenue-(ran1+new_monthlyfee))/(ran1+new_monthlyfee)*1)*100).toFixed(0) || "0";
        }
      });
      range5?.addEventListener("change", (ev) => {
        let ran1 = parseFloat((<HTMLInputElement>range1).value);
        let ran5 = parseFloat((<HTMLInputElement>range5).value);
        let monthlyfee_txt = monthlyfee?.innerHTML || 0;
        let new_monthlyfee = parseFloat(monthlyfee_txt?.toString().trim().replace(",",""));

        if (range5txt) {
          range5txt.textContent = ran5.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "0";
        }

        let sales_txt = sales?.innerHTML || 0;
        let new_sales = parseFloat(sales_txt?.toString().trim().replace(",",""));
        if(revenue){
          revenue.textContent =
          (Math.round((ran5*new_sales) *100) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "0";
        }

        let revenue_txt = revenue?.innerHTML || 0;
        let new_revenue = parseFloat(revenue_txt?.toString().trim().replace(",",""));

        if(profit){
          profit.textContent =
          ((new_revenue-ran1-new_monthlyfee)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "0";
        }

        if(monthly_roi){
          monthly_roi.textContent =
          (((new_revenue-(ran1+new_monthlyfee))/(ran1+new_monthlyfee)*1)*100).toFixed(0) || "0";
        }
      });
    }
  }
  if (!customElements.get(WC_TAG_NAME)) {
    customElements.define(WC_TAG_NAME, PPCWidgetElement);
  }

  // create an instance of the component
  const componentInstance = document.createElement(WC_TAG_NAME, {
    is: WC_TAG_NAME,
  });

  // mount the component instance in the body element
  const container = document.body;
  container.appendChild(componentInstance);

  return componentInstance;
}
