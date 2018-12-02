import React, { Component } from 'react';
import Editable from 'react-editable-label';
import './Coverage.css' 

export default class Coverage extends Component {
    constructor() {
        super()
        this.state = {
            minimum: 0
        }
    }
    calculateMinimum(fields) {
        let premium = parseInt(fields.premium.value)
        premium = Number.isInteger(premium) ?  premium : 0
        let hsa = parseInt(fields.hsa.value)
        hsa = Number.isInteger(hsa) ?  hsa : 0
        let surcharge = parseInt(fields.surcharge.value)
        surcharge = Number.isInteger(surcharge) ? surcharge : 0
        return premium + surcharge - hsa
    }
    calculateMaxDeductible(fields) {
        let premium = parseInt(fields.premium.value)
        premium = Number.isInteger(premium) ?  premium : 0
        let deductible = parseInt(fields.deductible.value)
        deductible = Number.isInteger(deductible) ? deductible : 0
        let hra = parseInt(fields.hra.value)
        hra = Number.isInteger(hra) ?  hra : 0
        let hsa = parseInt(fields.hsa.value)
        hsa = Number.isInteger(hsa) ?  hsa : 0
        let surcharge = parseInt(fields.surcharge.value)
        surcharge = Number.isInteger(surcharge) ? surcharge : 0
        return premium + deductible + surcharge - hra - hsa
    }
    calculateOutPocketMaximum(fields) {
        let premium = parseInt(fields.premium.value)
        premium = Number.isInteger(premium) ?  premium : 0
        let pocketMax = parseInt(fields.pocketMax.value)
        pocketMax = Number.isInteger(pocketMax) ? pocketMax : 0
        let hra = parseInt(fields.hra.value)
        hra = Number.isInteger(hra) ?  hra : 0
        let hsa = parseInt(fields.hsa.value)
        hsa = Number.isInteger(hsa) ?  hsa : 0
        let surcharge = parseInt(fields.surcharge.value)
        surcharge = Number.isInteger(surcharge) ? surcharge : 0
        return premium + pocketMax + surcharge - hra - hsa
    }

    render() {
        const fields = this.props.fields
        const minimum = this.calculateMinimum(fields)
        const maxedDecuctible = this.calculateMaxDeductible(fields)
        const pocketMax = this.calculateOutPocketMaximum(fields)

        return (
            <div className='Coverage'>
                <h2>
                    <Editable initialValue={this.props.coverageTitle} save={value => this.props.saveTitle({value, id:this.props.formId})}/>
                </h2>
                <input onChange={(e) => this.props.select(e, this.props.formId)} id={`${this.props.formId}-compare`} type="checkbox" />
                <label for={`${this.props.formId}-compare`}>Select for Comparison</label>
                <form>
                <p>All values should be entered as whole number for the entire year.</p>
                {Object.keys(fields).map( (field) => {
                    const id = this.props.formId + '_' + field

                    return (
                        <div>
                            <label for={id}>{fields[field].name}</label>
                            <input 
                            id={id} 
                            onChange={(e) => this.props.updateField(e, field, this.props.formId)}
                            value={fields[field].value}></input>
                        </div>
                    )
                })}
                <div>
                    <h3>Minimum Usage Cost: ${minimum}</h3>
                    <p>Premium + Surchare - HSA. This represents a year in which the insurance is unused. No additional costs over whatever might be fully covered.</p>
                    <div className='dim'><h3>Maxed Deductible Cost: ${maxedDecuctible}</h3>
                        <p>Premium + Surcharge + Deductible - HSA - HRA. This represents a year in which the expenses reach exactly to the deductible. This is not a good way to compare plans because reaching the deductible on different plans representes much differnt health care spending.</p>
                    </div>
                    <h3>Out of Pocket Max: ${pocketMax}</h3>
                    <p>Premium + Surcharge + Out of Pocket Maximum - HSA - HRA. This represents a year in which expenses reach the Out of Pocket Maxium.</p>
                </div>
                {/* @todo: ability to add field <button>Add field</button> */}
            </form>
            </div>
        )
    }
}