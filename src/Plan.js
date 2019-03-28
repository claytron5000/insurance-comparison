import React, { Component } from 'react';
import update from 'immutability-helper';
import { connect } from 'react-redux'

import Coverage from './Coverage.js';
import Comparison from './Comparison.js'
import './Plan.css'


const addNewCoverage = coverages => {
    return coverages[] = {
        coverageTitle: 'Coverage Title',
        fields: {
            premium: {name: 'Yearly Premium', value: '', positive: true},
            deductible: {name: 'Deductible', value: '', positive: true},
            pocketMax: {name: 'Out of pocket maximum', value: '', positive: true},
            hsa: {name: 'Health Savings Account', value: '', positive: false},
            hra: {name: 'Health Reimbursment Account', value: '', positive: false},
            surcharge: {name: 'Surcharge', value: '', positive: true}
        },
        compare: false,
    };
}

export default class Plan extends Component {
    constructor() {
        super();
        this.blankCoverage = {
            coverageTitle: 'Coverage Title',
            fields: {
                premium: {name: 'Yearly Premium', value: '', positive: true},
                deductible: {name: 'Deductible', value: '', positive: true},
                pocketMax: {name: 'Out of pocket maximum', value: '', positive: true},
                hsa: {name: 'Health Savings Account', value: '', positive: false},
                hra: {name: 'Health Reimbursment Account', value: '', positive: false},
                surcharge: {name: 'Surcharge', value: '', positive: true}
            },
            compare: false,
        }
        this.state = {
            planTitle: 'Coverage Plans',
            coverages: {
                coverage_0 : this.blankCoverage
            },
            comparisons: []
        }

        this.updateField = this.updateField.bind(this)
        this.addCoverage = this.addCoverage.bind(this)
        this.select = this.select.bind(this)
        this.addToCompare = this.addToCompare.bind(this)
        this.saveTitle = this.saveTitle.bind(this)
    }
    saveTitle(title) {
        const coverages = update(this.state.coverages, {[title.id]: {coverageTitle: {$set: title.value}}})
        this.setState({ coverages })
    }
    // This definitely shouldn't be in two places
    calculateMinimum(fields) {
        let premium = parseInt(fields.premium.value)
        premium = Number.isInteger(premium) ?  premium : 0
        let hsa = parseInt(fields.hsa.value)
        hsa = Number.isInteger(hsa) ?  hsa : 0
        let surcharge = parseInt(fields.surcharge.value)
        surcharge = Number.isInteger(surcharge) ? surcharge : 0
        return premium + surcharge - hsa
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

    addToCompare() {
        const coverages = this.state.coverages
        const compare = Object.keys(coverages)
            .reduce((acc, curr) => {
                console.log(acc)
                if (coverages[curr].compare) {
                    const min = this.calculateMinimum(coverages[curr].fields)
                    const max = this.calculateOutPocketMaximum(coverages[curr].fields)
                    if ('title' in acc) {
                        acc.title = `${acc.title} & ${coverages[curr].coverageTitle}`
                        acc.minimum = acc.minimum + min
                        acc.maximum = acc.maximum + max
                    }
                    else {
                        acc.title = coverages[curr].coverageTitle
                        acc.minimum = min
                        acc.maximum = max
                    }
                    
                    // return acc
                }
                return acc
                
            }, {})
        const comparisons = update(this.state.comparisons, {$push: [compare]});
        this.setState({comparisons })
    }

    select(e, id) {
        const coverages = update(this.state.coverages, { [id]: { compare : { $apply: (x)=> !x }}})
        this.setState({ coverages })
    }

    addCoverage() {
        const nextIndex = Object.keys(this.state.coverages).length
        const coverages = update(this.state.coverages, {$merge:  {[`coverage_${nextIndex}`]: this.blankCoverage} })
        this.setState({ coverages })
    }

    updateField(e, field, coverageId) {
        e.preventDefault();
        const value = e.target.value
        if (!value.match(/[0-9]*/)) {
            console.log(value)
            return;
        }
        const coverages = update(this.state.coverages, {
            [coverageId]: {fields: {[field]: {value: {$set:value}}}}
        })
        this.setState({coverages})
    }

    render() {
        const coverages = this.state.coverages;
        return (
            <div>
                <div className='Plan'>
                    <h1>{this.state.planTitle}</h1>
                    <button onClick={this.addToCompare}>Add Selected to Comparison <span className='icon icon-arrow'>→</span></button>
                    <ul>
                        {Object.keys(this.state.coverages).map( 
                            (coverage) => <Coverage 
                                updateField={this.updateField}
                                coverageTitle={coverages[coverage].coverageTitle}
                                fields={coverages[coverage].fields}
                                formId={coverage}
                                select={this.select}
                                saveTitle={this.saveTitle}
                                />
                        )}
                    </ul>
                    <button onClick={this.addCoverage}><span className='icon icon-plus'>+</span> Add Coverage</button>
                </div>
                <div className='Comparisons'>
                    <ul>
                        {Object.keys(this.state.comparisons).map(comparison => {
                            console.log(comparison)
                            return (
                                <Comparison 
                                title={this.state.comparisons[comparison].title}
                                minimum={this.state.comparisons[comparison].minimum}
                                maximum={this.state.comparisons[comparison].maximum}
                                />
                            )
                        })}
                    </ul>
                </div>
            </div>  
        )
    }
}