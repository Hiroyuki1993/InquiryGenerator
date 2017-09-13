var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var ReactDOM = require('react-dom');
var Button = require('react-bootstrap').Button;
var Form = require('react-bootstrap').Form;
var FormGroup = require('react-bootstrap').FormGroup;
var FormControl = require('react-bootstrap').FormControl;
var ControlLabel = require('react-bootstrap').ControlLabel;
var Col = require('react-bootstrap').Col;
var Well = require('react-bootstrap').Well;

var Body = createReactClass({
    render: function(){
        return (
            <QuestionBox/>
        );
    }
});

var QuestionBox = createReactClass({
    getInitialState: function(){
        return {questionData:[]};
    },
    handleAddQuestion: function(fname, dname){
        var data = this.state.questionData;
        data.push({fname: fname, dname: dname});
        this.setState({questionData: data});
    },
    render: function() {
        return(
            <div>
                <QuestionForm addQuestion={this.handleAddQuestion}/>
                <XMLdata questionData={this.state.questionData}/>
            </div>
        )
    }
})

var Question = createReactClass({
    propTypes:{
        fname: PropTypes.string.isRequired,
        dname: PropTypes.string,
        order: PropTypes.number
    },
    render:function(){
        return (
            <p>

            &lt;question&gt;<br/>
                &lt;parent&gt;問診&lt;/parent&gt;<br/>
                &lt;hq&gt;どのくらい食べたいですか&lt;/hq&gt;<br/>
                &lt;image&gt;{this.props.fname}&lt;/image&gt;<br/>
                &lt;food&gt;{this.props.dname}&lt;/food&gt;<br/>
                &lt;type&gt;seek&lt;/type&gt;<br/>
                &lt;order&gt;{this.props.order}&lt;/order&gt;<br/>
                &lt;desc&gt;0: 全く食べたくない\n100: とても食べたい&lt;/desc&gt;<br/>
                &lt;min&gt;0&lt;/min&gt;<br/>
                &lt;max&gt;100&lt;/max&gt;<br/>
                &lt;items&gt;&lt;/items&gt;<br/>
            &lt;/question&gt;<br/>

            </p>
        );
    }
});

var XMLdata = createReactClass({
    propTypes:{
        questionData:PropTypes.arrayOf(PropTypes.object).isRequired
    },
    handleDownload: function(content){
        var blob = new Blob([ content ], {"type":"text/plain"});
        if (window.navigator.msSaveBlob){
            window.navigator.msSaveBlob(blob, "inquiry.xml");
            window.navigator.msSaveOrOpenBlob(blob, "inquiry.xml");
        } else {
            
        }
    },
    render:function(){
        var QuestionNodes = this.props.questionData.map(function(question, index){
            return (
                <Question fname={question.fname} dname={question.dname} key={index} order={index + 6}/>
            );
        });
        return (
            <Well>
            &lt;?xml version="1.0" encoding="UTF-8"?&gt;<br/>
            &lt;inquiry&gt;<br/>
            &lt;roots&gt;<br/>
                &lt;root&gt;問診&lt;/root&gt;<br/>
            &lt;/roots&gt;<br/>
            &lt;questions&gt;<br/>
                &lt;question&gt;<br/>
                    &lt;parent&gt;問診&lt;/parent&gt;<br/>
                    &lt;hq&gt;どのくらい満腹ですか&lt;/hq&gt;<br/>
                    &lt;type&gt;seek&lt;/type&gt;<br/>
                    &lt;order&gt;1&lt;/order&gt;<br/>
                    &lt;desc&gt;0: 全くない\n100: とてもある&lt;/desc&gt;<br/>
                    &lt;min&gt;0&lt;/min&gt;<br/>
                    &lt;max&gt;100&lt;/max&gt;<br/>
                    &lt;items&gt;&lt;/items&gt;<br/>
                &lt;/question&gt;<br/>
                &lt;question&gt;<br/>
                    &lt;parent&gt;問診&lt;/parent&gt;<br/>
                    &lt;hq&gt;どのくらい空腹ですか&lt;/hq&gt;<br/>
                    &lt;type&gt;seek&lt;/type&gt;<br/>
                    &lt;order&gt;2&lt;/order&gt;<br/>
                    &lt;desc&gt;0: 全くない\n100: とてもある&lt;/desc&gt;<br/>
                    &lt;min&gt;0&lt;/min&gt;<br/>
                    &lt;max&gt;100&lt;/max&gt;<br/>
                    &lt;items&gt;&lt;/items&gt;<br/>
                &lt;/question&gt;<br/>
                &lt;question&gt;<br/>
                    &lt;parent&gt;問診&lt;/parent&gt;<br/>
                    &lt;hq&gt;どのくらい活力に満ちていますか&lt;/hq&gt;<br/>
                    &lt;type&gt;seek&lt;/type&gt;<br/>
                    &lt;order&gt;3&lt;/order&gt;<br/>
                    &lt;desc&gt;0: 全くない\n100: とてもある&lt;/desc&gt;<br/>
                    &lt;min&gt;0&lt;/min&gt;<br/>
                    &lt;max&gt;100&lt;/max&gt;<br/>
                    &lt;items&gt;&lt;/items&gt;<br/>
                &lt;/question&gt;<br/>
                &lt;question&gt;<br/>
                    &lt;parent&gt;問診&lt;/parent&gt;<br/>
                    &lt;hq&gt;どのくらい疲れていますか&lt;/hq&gt;<br/>
                    &lt;type&gt;seek&lt;/type&gt;<br/>
                    &lt;order&gt;4&lt;/order&gt;<br/>
                    &lt;desc&gt;0: 全くない\n100: とてもある&lt;/desc&gt;<br/>
                    &lt;min&gt;0&lt;/min&gt;<br/>
                    &lt;max&gt;100&lt;/max&gt;<br/>
                    &lt;items&gt;&lt;/items&gt;<br/>
                &lt;/question&gt;<br/>
                &lt;question&gt;<br/>
                    &lt;parent&gt;問診&lt;/parent&gt;<br/>
                    &lt;hq&gt;どのくらい眠いですか&lt;/hq&gt;<br/>
                    &lt;type&gt;seek&lt;/type&gt;<br/>
                    &lt;order&gt;5&lt;/order&gt;<br/>
                    &lt;desc&gt;0: 全くない\n100: とてもある&lt;/desc&gt;<br/>
                    &lt;min&gt;0&lt;/min&gt;<br/>
                    &lt;max&gt;100&lt;/max&gt;<br/>
                    &lt;items&gt;&lt;/items&gt;<br/>
                &lt;/question&gt;<br/>
                {QuestionNodes}
            &lt;/questions&gt;<br/>
            &lt;/inquiry&gt;<br/>
        </Well>
        );
    }
});

var QuestionForm = createReactClass({
    propTypes:{
        addQuestion: PropTypes.func.isRequired
    },
    handleSubmit:function(){
        var fname = ReactDOM.findDOMNode(this.refs.fname).value.trim();
        var dname = ReactDOM.findDOMNode(this.refs.dname).value.trim();
        if (!fname) {
            return;
        }
        this.props.addQuestion(fname, dname);
        ReactDOM.findDOMNode(this.refs.fname).value = '';
        ReactDOM.findDOMNode(this.refs.dname).value = '';
    },
    render: function(){
        return (
            <form>
                <FormGroup controlId="formControlsFile">
                    <ControlLabel>ファイル名</ControlLabel>
                    <FormControl placeholder="ファイル名" ref="fname"/>
                </FormGroup>
                <FormGroup controlId="formControlsApp">
                    <ControlLabel>アプリ表示名</ControlLabel>
                    <FormControl placeholder="表示名" ref="dname"/>
                </FormGroup>
                <Button bsStyle='primary' onClick={this.handleSubmit}>追加</Button>
            </form>
        );
    }
});

module.exports = Body;