import styles from "./index.css";

export function createTemplate(greeting: string) {
  
  let tt = JSON.parse(greeting);
  const template = document.createElement("template");

  let montlyfee = 0;
  let onetimefee = 0;
  if(tt.range[1].value <= tt.montly_mfee[0].max){
    montlyfee = tt.range[1].value * tt.montly_mfee[0].multipal;
    onetimefee = tt.montly_mfee[0].setupfee;
  }else if(tt.range[1].value >= tt.montly_mfee[1].min && tt.range[1].value <= tt.montly_mfee[1].max){
    montlyfee = tt.range[1].value * tt.montly_mfee[1].multipal;
    onetimefee = tt.montly_mfee[1].setupfee;
  }else if(tt.range[1].value >= tt.montly_mfee[2].min && tt.range[1].value <= tt.montly_mfee[2].max){
    montlyfee = tt.range[1].value * tt.montly_mfee[2].multipal;
    onetimefee = tt.montly_mfee[2].setupfee;
  }else if(tt.range[1].value >= tt.montly_mfee[3].min){
    montlyfee = tt.range[1].value * tt.montly_mfee[3].multipal;
    onetimefee = tt.montly_mfee[3].setupfee;
  }

  template.innerHTML = `
    <style>${styles.toString()}</style>

    <div class="ppc_w_container">
      <div class="ppc_w_mainncard">
        <h3 class="ppc_w_heading">ROI for services based businesses</h3>
        <div class="ppc_w_cardcss">
          <div class="ppc_w_info">
            <div class="ppc_w_tabled">
              <table class="ppc_w_content">
                <tbody>
                <tr>
                    <td class="ppc_w_quest" >what is the average cost per click for keyboards relating for your business?</td>
                    <td>
                      <table class="ppc_w_rangetb">
                        <tbody>
                          <tr>
                            <td>
                              <p class="ppc_w_rangep">Monthly Budget <span class="ppc_w_num">$<span id="ppc_w_range1txt">${tt.range[1].value}</span></span></p>
                              <input type="range" step="${tt.range[1].step}" min="${tt.range[1].min}"  max="${tt.range[1].max}" value="${tt.range[1].value}" id="ppc_w_range1"   class="ppc_w_rangewd">
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td class="ppc_w_quest">what is the average cost per click for keyboards relating for your business?</td>
                    <td>
                      <table class="ppc_w_rangetb">
                        <tbody>
                          <tr>
                            <td>
                              <p class="ppc_w_rangep">Expected CPC <span class="ppc_w_num">$<span id="ppc_w_range2txt">${tt.range[2].value}</span></span></p>
                              <input step="${tt.range[2].step}" type="range" min="${tt.range[2].min}"  max="${tt.range[2].max}" value="${tt.range[2].value}" id="ppc_w_range2"   class="ppc_w_rangewd">
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td class="ppc_w_quest">how much do you intent to spend on your ad compaign?</td>
                    <td>
                      <table class="ppc_w_rangetb">
                        <tbody>
                          <tr>
                            <td>
                              <p class="ppc_w_rangep">Conversion Rate <span class="ppc_w_num"><span id="ppc_w_range3txt">${tt.range[3].value}</span>%</span></p>
                              <input type="range" step="${tt.range[3].step}" min="${tt.range[3].min}" id="ppc_w_range3" max="${tt.range[3].max}" value="${tt.range[3].value}" class="ppc_w_rangewd">
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td class="ppc_w_quest">What is the conversion rate (CVR) of visitors to your website that become new leads?</td>
                    <td>
                      <table class="ppc_w_rangetb">
                        <tbody>
                          <tr>
                            <td>
                              <p class="ppc_w_rangep">Close Rate <span class="ppc_w_num"><span id="ppc_w_range4txt">${tt.range[4].value}</span>%</span></p>
                              <input type="range" step="${tt.range[4].step}" min="${tt.range[4].min}" id="ppc_w_range4" max="${tt.range[4].max}" value="${tt.range[4].value}" class="ppc_w_rangewd">
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td class="ppc_w_quest">How many of your leads turn into customers?</td>
                    <td>
                      <table class="ppc_w_rangetb">
                        <tbody>
                          <tr>
                            <td>
                              <p class="ppc_w_rangep">Avg Customer Value <span class="ppc_w_num">$<span id="ppc_w_range5txt">${tt.range[5].value}</span></span></p>
                              <input step="${tt.range[5].step}" type="range" min="${tt.range[5].min}" id="ppc_w_range5" max="${tt.range[5].max}" value="${tt.range[5].value}" class="ppc_w_rangewd">
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td>Monthly Management Fee : $<span id="ppc_w_monthlyfee">${montlyfee}</span></td>
                    <td>One Time Setup Fee : $<span id="ppc_w_onetime_setup">${onetimefee}</span></td>
                  </tr>
                </tbody>
              </table>
              <hr class="ppc_w_hrcss">
            </div>
          </div>
          <div class="ppc_w_form">
            <div class="ppc_w_formcard">
              <div class="ppc_w_aling">
                <h3 class="ppc_w_uk-card-title">IWCN</h3>
                <p>Based on these numbers, here is what you could expect for return on investment.</p>
                <table class="ppc_w_record">
                  <tbody>
                    <tr>
                      <td style="text-align: left;">Visits</td>
                      <td class="ppc_w_uk-text-right" id="ppc_w_visits">66.7</td>
                    </tr>
                    <tr>
                      <td style="text-align: left;">Leads</td>
                      <td class="ppc_w_uk-text-right"><span id="ppc_w_leads">10.0</span></td>
                    </tr>
                    <tr>
                      <td style="text-align: left;">Cost Per Leads</td>
                      <td class="ppc_w_uk-text-right" >$<span id="ppc_w_cpltt">100</span></td>
                    </tr>
                    <tr>
                      <td style="text-align: left;">Sales</td>
                      <td class="ppc_w_uk-text-right" id="ppc_w_sales">5.0</td>
                    </tr>
                    <tr>
                      <td style="text-align: left;">Cost Per Sale</td>
                      <td class="ppc_w_uk-text-right">$<span id="ppc_w_cps">200</span></td>
                    </tr>
                    <tr>
                      <td style="text-align: left;">Revenue</td>
                      <td class="ppc_w_uk-text-right" >$<span id="ppc_w_revenue">2500</span></td>
                    </tr>
                    <tr>
                      <td style="text-align: left;">Profit</td>
                      <td class="ppc_w_uk-text-right">$<span id="ppc_w_profit">1250</span></td>
                    </tr>
                    <tr>
                      <td class="ppc_w_total_roi" style="text-align: left;">Monthly ROI</td>
                      <td class="ppc_w_uk-text-right ppc_w_totalval"><span id="ppc_w_monthly_roi">100</span>%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>

        <div class="ppc_w_mrtop40 ppc_w_aling">
          <table>
            <tbody>
              <tr>
                <td><label class="ppc_w_switch">
                    <input type="checkbox">
                    <span class="ppc_w_slider ppc_w_round"> </span>
                  </label></td>
                <td> <span class="ppc_w_tooglecss">Show profit Margin calculation</span> </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  return template;
}
