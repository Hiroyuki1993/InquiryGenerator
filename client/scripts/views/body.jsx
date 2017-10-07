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
                <QuestionForm addQuestion={this.handleAddQuestion} foodoptions={json_data}/>
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
                &lt;hq&gt;どのくらい食事に取り入れたい、\nあるいは食べたいと思いますか&lt;/hq&gt;<br/>
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
                    &lt;desc&gt;0: 全く満腹でない\n100: とても満腹である&lt;/desc&gt;<br/>
                    &lt;min&gt;0&lt;/min&gt;<br/>
                    &lt;max&gt;100&lt;/max&gt;<br/>
                    &lt;items&gt;&lt;/items&gt;<br/>
                &lt;/question&gt;<br/>
                &lt;question&gt;<br/>
                    &lt;parent&gt;問診&lt;/parent&gt;<br/>
                    &lt;hq&gt;どのくらい空腹ですか&lt;/hq&gt;<br/>
                    &lt;type&gt;seek&lt;/type&gt;<br/>
                    &lt;order&gt;2&lt;/order&gt;<br/>
                    &lt;desc&gt;0: 全く空腹でない\n100: とても空腹である&lt;/desc&gt;<br/>
                    &lt;min&gt;0&lt;/min&gt;<br/>
                    &lt;max&gt;100&lt;/max&gt;<br/>
                    &lt;items&gt;&lt;/items&gt;<br/>
                &lt;/question&gt;<br/>
                &lt;question&gt;<br/>
                    &lt;parent&gt;問診&lt;/parent&gt;<br/>
                    &lt;hq&gt;どのくらい活力に満ちていますか&lt;/hq&gt;<br/>
                    &lt;type&gt;seek&lt;/type&gt;<br/>
                    &lt;order&gt;3&lt;/order&gt;<br/>
                    &lt;desc&gt;0: 全く満ちていない\n100: とても満ちている&lt;/desc&gt;<br/>
                    &lt;min&gt;0&lt;/min&gt;<br/>
                    &lt;max&gt;100&lt;/max&gt;<br/>
                    &lt;items&gt;&lt;/items&gt;<br/>
                &lt;/question&gt;<br/>
                &lt;question&gt;<br/>
                    &lt;parent&gt;問診&lt;/parent&gt;<br/>
                    &lt;hq&gt;どのくらい疲れていますか&lt;/hq&gt;<br/>
                    &lt;type&gt;seek&lt;/type&gt;<br/>
                    &lt;order&gt;4&lt;/order&gt;<br/>
                    &lt;desc&gt;0: 全く疲れていない\n100: とても疲れている&lt;/desc&gt;<br/>
                    &lt;min&gt;0&lt;/min&gt;<br/>
                    &lt;max&gt;100&lt;/max&gt;<br/>
                    &lt;items&gt;&lt;/items&gt;<br/>
                &lt;/question&gt;<br/>
                &lt;question&gt;<br/>
                    &lt;parent&gt;問診&lt;/parent&gt;<br/>
                    &lt;hq&gt;どのくらい眠いですか&lt;/hq&gt;<br/>
                    &lt;type&gt;seek&lt;/type&gt;<br/>
                    &lt;order&gt;5&lt;/order&gt;<br/>
                    &lt;desc&gt;0: 全く眠くない\n100: とても眠い&lt;/desc&gt;<br/>
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
        addQuestion: PropTypes.func.isRequired,
        foodoptions: PropTypes.array
    },
    handleSubmit:function(){
        var values = ReactDOM.findDOMNode(this.refs.formselect).value.trim().split(",");
        var fname = values[0];
        var dname = values[1];
        if (!fname) {
            return;
        }
        this.props.addQuestion(fname, dname);
        ReactDOM.findDOMNode(this.refs.formselect).value = '';
    },
    render: function(){
        var options = this.props.foodoptions.map(function(foods){
            return <option value={foods['fname']+","+foods['dname']} key={foods['fname']} name={foods['dname']}>{foods["dname"]}</option>;
        });
        return (
            <form>
                <FormGroup controlId="formControlSelect">
                    <ControlLabel>食品名</ControlLabel>
                    <FormControl componentClass="select" placeholder="select" ref="formselect">
                        <option value="">---</option>
                        {options}
                    </FormControl>
                </FormGroup>
                <Button bsStyle='primary' onClick={this.handleSubmit}>追加</Button>
            </form>
        );
    }
});

var json_data = [
{"fname": "konfureku_1", "dname": "\u30b3\u30fc\u30f3\u30d5\u30ec\u30fc\u30af"}, {"fname": "syokupan_1", "dname": "\u98df\u30d1\u30f3"}, {"fname": "fransupan_1", "dname": "\u30d5\u30e9\u30f3\u30b9\u30d1\u30f3"}, {"fname": "udon_1", "dname": "\u3046\u3069\u3093"}, {"fname": "tyukamen_1", "dname": "\u4e2d\u83ef\u9eba"}, {"fname": "supagettyi_1", "dname": "\u30b9\u30d1\u30b2\u30c3\u30c6\u30a3"}, {"fname": "yakifu_1", "dname": "\u713c\u304d\u9ea9"}, {"fname": "hakumai_1", "dname": "\u767d\u7c73"}, {"fname": "moti_1", "dname": "\u3082\u3061"}, {"fname": "soba_1", "dname": "\u305d\u3070"}, {"fname": "konnyaku_2", "dname": "\u3053\u3093\u306b\u3083\u304f"}, {"fname": "satumaimo_2", "dname": "\u30b5\u30c4\u30de\u30a4\u30e2"}, {"fname": "satoimo_2", "dname": "\u30b5\u30c8\u30a4\u30e2"}, {"fname": "zyagaimo_2", "dname": "\u30b8\u30e3\u30ac\u30a4\u30e2"}, {"fname": "yamaimo_2", "dname": "\u30e4\u30de\u30a4\u30e2"}, {"fname": "kokutou_3", "dname": "\u9ed2\u7cd6"}, {"fname": "zyouhakutou_3", "dname": "\u4e0a\u767d\u7cd6"}, {"fname": "hatimitu_3", "dname": "\u306f\u3061\u307f\u3064"}, {"fname": "mepuru_3", "dname": "\u30e1\u30fc\u30d7\u30eb\u30b7\u30ed\u30c3\u30d7"}, {"fname": "azuki_4", "dname": "\u3042\u305a\u304d"}, {"fname": "daizu_4", "dname": "\u5927\u8c46"}, {"fname": "kinako_4", "dname": "\u304d\u306a\u3053"}, {"fname": "toufu_4", "dname": "\u3068\u3046\u3075"}, {"fname": "aburaage_4", "dname": "\u6cb9\u63da\u3052"}, {"fname": "itohikinatto_4", "dname": "\u7d0d\u8c46"}, {"fname": "tounyu_4", "dname": "\u8c46\u4e73"}, {"fname": "amond_5", "dname": "\u30a2\u30fc\u30e2\u30f3\u30c9"}, {"fname": "kurumi_5", "dname": "\u304f\u308b\u307f"}, {"fname": "goma_5", "dname": "\u3054\u307e"}, {"fname": "rakkasei_5", "dname": "\u843d\u82b1\u751f"}, {"fname": "asuparagasu_6", "dname": "\u30a2\u30b9\u30d1\u30e9\u30ac\u30b9"}, {"fname": "sayaingen_6", "dname": "\u3055\u3084\u3044\u3093\u3052\u3093"}, {"fname": "edamame_6", "dname": "\u3048\u3060\u307e\u3081"}, {"fname": "okura_6", "dname": "\u30aa\u30af\u30e9"}, {"fname": "kabotya_6", "dname": "\u304b\u307c\u3061\u3083"}, {"fname": "kyabetu_6", "dname": "\u30ad\u30e3\u30d9\u30c4"}, {"fname": "kyuri_6", "dname": "\u304d\u3085\u3046\u308a"}, {"fname": "kyouna_6", "dname": "\u6c34\u83dc"}, {"fname": "gobou_6", "dname": "\u3054\u307c\u3046"}, {"fname": "komatuna_6", "dname": "\u3053\u307e\u3064\u306a"}, {"fname": "kaiwaredaikon_6", "dname": "\u304b\u3044\u308f\u308c\u5927\u6839"}, {"fname": "daikon_6", "dname": "\u5927\u6839"}, {"fname": "takenoko_6", "dname": "\u305f\u3051\u306e\u3053"}, {"fname": "tamanegi_6", "dname": "\u305f\u307e\u306d\u304e"}, {"fname": "tingensai_6", "dname": "\u30c1\u30f3\u30b2\u30f3\u30b5\u30a4"}, {"fname": "toumorokosi_6", "dname": "\u3068\u3046\u3082\u308d\u3053\u3057"}, {"fname": "tomato_6", "dname": "\u30c8\u30de\u30c8"}, {"fname": "nasu_6", "dname": "\u306a\u3059"}, {"fname": "nira_6", "dname": "\u30cb\u30e9"}, {"fname": "ninzin_6", "dname": "\u30cb\u30f3\u30b8\u30f3"}, {"fname": "negi_6", "dname": "\u30cd\u30ae"}, {"fname": "hakusai_6", "dname": "\u306f\u304f\u3055\u3044"}, {"fname": "sansikipiman_6", "dname": "\u4e09\u8272\u30d4\u30fc\u30de\u30f3"}, {"fname": "burokkori_6", "dname": "\u30d6\u30ed\u30c3\u30b3\u30ea\u30fc"}, {"fname": "hourensou_6", "dname": "\u307b\u3046\u308c\u3093\u8349"}, {"fname": "moyasi_6", "dname": "\u3082\u3084\u3057"}, {"fname": "retasu_6", "dname": "\u30ec\u30bf\u30b9"}, {"fname": "renkon_6", "dname": "\u30ec\u30f3\u30b3\u30f3"}, {"fname": "abokado_7", "dname": "\u30a2\u30dc\u30ab\u30c9"}, {"fname": "itigo_7", "dname": "\u3044\u3061\u3054"}, {"fname": "mikan_7", "dname": "\u307f\u304b\u3093"}, {"fname": "orengi_7", "dname": "\u30aa\u30ec\u30f3\u30b8"}, {"fname": "kaki_7", "dname": "\u304b\u304d"}, {"fname": "kiuifurutu_7", "dname": "\u30ad\u30a6\u30a4\u30d5\u30eb\u30fc\u30c4"}, {"fname": "gurepufurutu_7", "dname": "\u30b0\u30ec\u30fc\u30d7\u30d5\u30eb\u30fc\u30c4"}, {"fname": "nasi_7", "dname": "\u306a\u3057"}, {"fname": "painapple_7", "dname": "\u30d1\u30a4\u30ca\u30c3\u30d7\u30eb"}, {"fname": "banana_7", "dname": "\u30d0\u30ca\u30ca"}, {"fname": "budou_7", "dname": "\u3076\u3069\u3046"}, {"fname": "buruberi_7", "dname": "\u30d6\u30eb\u30fc\u30d9\u30ea\u30fc"}, {"fname": "meron_7", "dname": "\u30e1\u30ed\u30f3"}, {"fname": "momo_7", "dname": "\u3082\u3082"}, {"fname": "ringo_7", "dname": "\u308a\u3093\u3054"}, {"fname": "enokitake_8", "dname": "\u3048\u306e\u304d\u3060\u3051"}, {"fname": "kikurage_8", "dname": "\u304d\u304f\u3089\u3052"}, {"fname": "sitake_8", "dname": "\u3057\u3044\u305f\u3051"}, {"fname": "simezi_8", "dname": "\u3057\u3081\u3058"}, {"fname": "nameko_8", "dname": "\u306a\u3081\u3053"}, {"fname": "eringi_8", "dname": "\u3048\u308a\u3093\u304e"}, {"fname": "maitake_8", "dname": "\u307e\u3044\u305f\u3051"}, {"fname": "massyurumu_8", "dname": "\u30de\u30c3\u30b7\u30e5\u30eb\u30fc\u30e0"}, {"fname": "yakinori_9", "dname": "\u713c\u304d\u306e\u308a"}, {"fname": "konbutukudani_9", "dname": "\u3053\u3093\u3076"}, {"fname": "hiziki_9", "dname": "\u3072\u3058\u304d"}, {"fname": "wakame_9", "dname": "\u308f\u304b\u3081"}, {"fname": "mozuku_9", "dname": "\u3082\u305a\u304f"}, {"fname": "shiromizakana_10", "dname": "\u767d\u8eab\u9b5a(\u3076\u308a\u3001\u30bf\u30e9\u3001\u30b5\u30b1\u306a\u3069)"}, {"fname": "akamizakana_10", "dname": "\u8d64\u8eab\u9b5a(\u30de\u30b0\u30ed\u30ab\u30c4\u30aa\u30a4\u30ef\u30b7\u7b49)"}, {"fname": "kairui_10", "dname": "\u8c9d\u985e"}, {"fname": "gyoran_10", "dname": "\u9b5a\u5375"}, {"fname": "koukakurui_10", "dname": "\u7532\u6bbb\u985e(\u30ab\u30cb\u3001\u30bf\u30b3\u306a\u3069)"}, {"fname": "kozakana_10", "dname": "\u5c0f\u9b5a"}, {"fname": "sakananotukudani_10", "dname": "\u9b5a\u306e\u4f43\u716e"}, {"fname": "nerimono_10", "dname": "\u7df4\u308a\u7269(\u304b\u307e\u307c\u3053\u3001\u3061\u304f\u308f\u306a\u3069)"}, {"fname": "gyuniku_11", "dname": "\u725b\u8089"}, {"fname": "butaniku_11", "dname": "\u8c5a\u8089"}, {"fname": "rosuhamu_11", "dname": "\u30ed\u30fc\u30b9\u30cf\u30e0"}, {"fname": "bekon_11", "dname": "\u30d9\u30fc\u30b3\u30f3"}, {"fname": "uinna_11", "dname": "\u30a6\u30a4\u30f3\u30ca\u30fc"}, {"fname": "toriniku_11", "dname": "\u9d8f\u8089"}, {"fname": "uzuranotamago_12", "dname": "\u30a6\u30ba\u30e9\u306e\u5375"}, {"fname": "keiran_12", "dname": "\u9d8f\u5375"}, {"fname": "gyunyu_13", "dname": "\u725b\u4e73"}, {"fname": "yoguruto_13", "dname": "\u30e8\u30fc\u30b0\u30eb\u30c8"}, {"fname": "tizu_13", "dname": "\u30c1\u30fc\u30ba"}, {"fname": "gomaabura_14", "dname": "\u30b4\u30de\u6cb9"}, {"fname": "tyogoyu_14", "dname": "\u6cb9(\u8abf\u5408\u6cb9)"}, {"fname": "yuenbata_14", "dname": "\u6709\u5869\u30d0\u30bf\u30fc"}, {"fname": "oribuoiru_14", "dname": "\u30aa\u30ea\u30fc\u30d6\u30aa\u30a4\u30eb"}, {"fname": "mayonezu_14", "dname": "\u30de\u30e8\u30cd\u30fc\u30ba"}, {"fname": "tippusu_15", "dname": "\u30c1\u30c3\u30d7\u30b9"}, {"fname": "tyokoreto_15", "dname": "\u30c1\u30e7\u30b3\u30ec\u30fc\u30c8"}, {"fname": "zeri_15", "dname": "\u30bc\u30ea\u30fc"}, {"fname": "kasipan_15", "dname": "\u83d3\u5b50\u30d1\u30f3"}, {"fname": "bisuketto_15", "dname": "\u30d3\u30b9\u30b1\u30c3\u30c8"}, {"fname": "kukki_15", "dname": "\u30af\u30c3\u30ad\u30fc"}, {"fname": "yougasi_15", "dname": "\u6d0b\u83d3\u5b50"}, {"fname": "wagasi_15", "dname": "\u548c\u83d3\u5b50"}, {"fname": "ame_15", "dname": "\u30a2\u30e1"}, {"fname": "tansaninryou_16", "dname": "\u70ad\u9178\u98f2\u6599"}, {"fname": "furutuzyusu_16", "dname": "\u30d5\u30eb\u30fc\u30c4\u30b8\u30e5\u30fc\u30b9"}, {"fname": "koutya_16", "dname": "\u7d05\u8336"}, {"fname": "kohi_16", "dname": "\u30b3\u30fc\u30d2\u30fc\u30fb\u30ab\u30d5\u30a7\u30aa\u30ec"}, {"fname": "enazidorinku_16", "dname": "\u30a8\u30ca\u30b8\u30fc\u30c9\u30ea\u30f3\u30af"}, {"fname": "sake_16", "dname": "\u9152"}
];

module.exports = Body;