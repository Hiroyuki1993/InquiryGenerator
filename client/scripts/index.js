var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var Body = require('./views/body.jsx');
var PageHeader = require('react-bootstrap').PageHeader;
var Panel = require('react-bootstrap').Panel;


var Header = createReactClass({
    render: function(){
        return(
            <div>
                <PageHeader>問診ファイル自動作成機　<small>食品EMA用</small></PageHeader>
                <Panel header="使い方" bsStyle="info">
                問診ファイル（inquiry.xml）に以下のコードをコピー＆ペーストしてください<br/>
                貼り付けの際はwindows付属のメモ帳ではなく、サクラエディタなど文字コードをUTF-8形式で保存できるエディタを使用して下さい（androidの仕様のため）<br/>
                ファイル名の修正などはペースト先のエディタでできます<br/>
                指定するファイル名は<a href="https://drive.google.com/open?id=0B_nK8gCpGV7ELXNFRDBsZEdFZTA">こちら</a>の名前にしたがってください
                </Panel>
            </div>
        );
    }
});

var Footer = createReactClass({
    render: function(){
        return (
            <p>2017 Hiroyuki Kuromiya</p>
        );
    }
});

var Index = createReactClass({
    render:function(){
        return(
            <div>
                <Header />
                <div className="">
                    <Body />
                </div>
                <Footer />
            </div>
        );
    }
});

ReactDOM.render(
    <Index />,
    document.getElementById('content')
);