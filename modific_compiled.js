if(!lt.util.load.provided_QMARK_('lt.plugins.modific.util')) {
goog.provide('lt.plugins.modific.util');
goog.require('cljs.core');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.files');
goog.require('lt.objs.files');
lt.plugins.modific.util.find_vcs_root = (function find_vcs_root(dirname,cwd){var dir = lt.objs.files.walk_up_find.call(null,cwd,dirname);if(!((dir == null)))
{return lt.objs.files.parent.call(null,dir);
} else
{return null;
}
});
lt.plugins.modific.util.settings_obj = lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.modific.util","settings-obj","lt.plugins.modific.util/settings-obj",4005261692),new cljs.core.Keyword(null,"settings","settings",2448535445),cljs.core.PersistentArrayMap.EMPTY));
lt.plugins.modific.util.__BEH__settings = (function __BEH__settings(this$,s){return lt.object.merge_BANG_.call(null,lt.plugins.modific.util.settings_obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"settings","settings",2448535445),s], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.modific.util","settings","lt.plugins.modific.util/settings",1228155214),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.modific.util.__BEH__settings,new cljs.core.Keyword(null,"desc","desc",1016984067),"Modific: init settings",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"settings",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"map","map",1014012110)], null)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init.settings!","init.settings!",1010327666),null], null), null));
/**
* @param {...*} var_args
*/
lt.plugins.modific.util.settings = (function() { 
var settings__delegate = function (more){return cljs.core.get_in.call(null,new cljs.core.Keyword(null,"settings","settings",2448535445).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.modific.util.settings_obj)),more);
};
var settings = function (var_args){
var more = null;if (arguments.length > 0) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return settings__delegate.call(this,more);};
settings.cljs$lang$maxFixedArity = 0;
settings.cljs$lang$applyTo = (function (arglist__8122){
var more = cljs.core.seq(arglist__8122);
return settings__delegate(more);
});
settings.cljs$core$IFn$_invoke$arity$variadic = settings__delegate;
return settings;
})()
;
lt.plugins.modific.util.IVcs = (function (){var obj8121 = {};return obj8121;
})();
lt.plugins.modific.util.vcs_root = (function vcs_root(this$,cwd){if((function (){var and__6352__auto__ = this$;if(and__6352__auto__)
{return this$.lt$plugins$modific$util$IVcs$vcs_root$arity$2;
} else
{return and__6352__auto__;
}
})())
{return this$.lt$plugins$modific$util$IVcs$vcs_root$arity$2(this$,cwd);
} else
{var x__6991__auto__ = (((this$ == null))?null:this$);return (function (){var or__6364__auto__ = (lt.plugins.modific.util.vcs_root[goog.typeOf(x__6991__auto__)]);if(or__6364__auto__)
{return or__6364__auto__;
} else
{var or__6364__auto____$1 = (lt.plugins.modific.util.vcs_root["_"]);if(or__6364__auto____$1)
{return or__6364__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IVcs.vcs-root",this$);
}
}
})().call(null,this$,cwd);
}
});
lt.plugins.modific.util.diff_cmd = (function diff_cmd(this$,fname){if((function (){var and__6352__auto__ = this$;if(and__6352__auto__)
{return this$.lt$plugins$modific$util$IVcs$diff_cmd$arity$2;
} else
{return and__6352__auto__;
}
})())
{return this$.lt$plugins$modific$util$IVcs$diff_cmd$arity$2(this$,fname);
} else
{var x__6991__auto__ = (((this$ == null))?null:this$);return (function (){var or__6364__auto__ = (lt.plugins.modific.util.diff_cmd[goog.typeOf(x__6991__auto__)]);if(or__6364__auto__)
{return or__6364__auto__;
} else
{var or__6364__auto____$1 = (lt.plugins.modific.util.diff_cmd["_"]);if(or__6364__auto____$1)
{return or__6364__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IVcs.diff-cmd",this$);
}
}
})().call(null,this$,fname);
}
});
lt.plugins.modific.util.status_cmd = (function status_cmd(this$){if((function (){var and__6352__auto__ = this$;if(and__6352__auto__)
{return this$.lt$plugins$modific$util$IVcs$status_cmd$arity$1;
} else
{return and__6352__auto__;
}
})())
{return this$.lt$plugins$modific$util$IVcs$status_cmd$arity$1(this$);
} else
{var x__6991__auto__ = (((this$ == null))?null:this$);return (function (){var or__6364__auto__ = (lt.plugins.modific.util.status_cmd[goog.typeOf(x__6991__auto__)]);if(or__6364__auto__)
{return or__6364__auto__;
} else
{var or__6364__auto____$1 = (lt.plugins.modific.util.status_cmd["_"]);if(or__6364__auto____$1)
{return or__6364__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IVcs.status-cmd",this$);
}
}
})().call(null,this$);
}
});
lt.plugins.modific.util.parse_status = (function parse_status(this$,status_out){if((function (){var and__6352__auto__ = this$;if(and__6352__auto__)
{return this$.lt$plugins$modific$util$IVcs$parse_status$arity$2;
} else
{return and__6352__auto__;
}
})())
{return this$.lt$plugins$modific$util$IVcs$parse_status$arity$2(this$,status_out);
} else
{var x__6991__auto__ = (((this$ == null))?null:this$);return (function (){var or__6364__auto__ = (lt.plugins.modific.util.parse_status[goog.typeOf(x__6991__auto__)]);if(or__6364__auto__)
{return or__6364__auto__;
} else
{var or__6364__auto____$1 = (lt.plugins.modific.util.parse_status["_"]);if(or__6364__auto____$1)
{return or__6364__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IVcs.parse-status",this$);
}
}
})().call(null,this$,status_out);
}
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.modific.vcs.git')) {
goog.provide('lt.plugins.modific.vcs.git');
goog.require('cljs.core');
goog.require('lt.plugins.modific.util');
goog.require('lt.plugins.modific.util');
lt.plugins.modific.vcs.git.s = cljs.core.partial.call(null,lt.plugins.modific.util.settings,new cljs.core.Keyword(null,"git","git",1014006596));
lt.plugins.modific.vcs.git.vcs = (function (){if(typeof lt.plugins.modific.vcs.git.t8125 !== 'undefined')
{} else
{
/**
* @constructor
*/
lt.plugins.modific.vcs.git.t8125 = (function (meta8126){
this.meta8126 = meta8126;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lt.plugins.modific.vcs.git.t8125.cljs$lang$type = true;
lt.plugins.modific.vcs.git.t8125.cljs$lang$ctorStr = "lt.plugins.modific.vcs.git/t8125";
lt.plugins.modific.vcs.git.t8125.cljs$lang$ctorPrWriter = (function (this__6931__auto__,writer__6932__auto__,opt__6933__auto__){return cljs.core._write.call(null,writer__6932__auto__,"lt.plugins.modific.vcs.git/t8125");
});
lt.plugins.modific.vcs.git.t8125.prototype.lt$plugins$modific$util$IVcs$ = true;
lt.plugins.modific.vcs.git.t8125.prototype.lt$plugins$modific$util$IVcs$vcs_root$arity$2 = (function (_,cwd){var self__ = this;
var ___$1 = this;return lt.plugins.modific.util.find_vcs_root.call(null,(function (){var or__6364__auto__ = lt.plugins.modific.vcs.git.s.call(null,new cljs.core.Keyword(null,"dir","dir",1014003711));if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return ".git";
}
})(),cwd);
});
lt.plugins.modific.vcs.git.t8125.prototype.lt$plugins$modific$util$IVcs$diff_cmd$arity$2 = (function (_,fname){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",1964298941),(function (){var or__6364__auto__ = lt.plugins.modific.vcs.git.s.call(null,new cljs.core.Keyword(null,"bin","bin",1014001785));if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return "git";
}
})(),new cljs.core.Keyword(null,"args","args",1016906831),cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["diff",(function (){var or__6364__auto__ = lt.plugins.modific.vcs.git.s.call(null,new cljs.core.Keyword(null,"diff.options","diff.options",4700029223));if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--no-color","--no-ext-diff"], null);
}
})(),"--",fname], null))], null);
});
lt.plugins.modific.vcs.git.t8125.prototype.lt$plugins$modific$util$IVcs$status_cmd$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",1964298941),(function (){var or__6364__auto__ = lt.plugins.modific.vcs.git.s.call(null,new cljs.core.Keyword(null,"bin","bin",1014001785));if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return "git";
}
})(),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["diff","status","--porcelain"], null)], null);
});
lt.plugins.modific.vcs.git.t8125.prototype.lt$plugins$modific$util$IVcs$parse_status$arity$2 = (function (_,status_out){var self__ = this;
var ___$1 = this;return status_out;
});
lt.plugins.modific.vcs.git.t8125.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8127){var self__ = this;
var _8127__$1 = this;return self__.meta8126;
});
lt.plugins.modific.vcs.git.t8125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8127,meta8126__$1){var self__ = this;
var _8127__$1 = this;return (new lt.plugins.modific.vcs.git.t8125(meta8126__$1));
});
lt.plugins.modific.vcs.git.__GT_t8125 = (function __GT_t8125(meta8126){return (new lt.plugins.modific.vcs.git.t8125(meta8126));
});
}
return (new lt.plugins.modific.vcs.git.t8125(null));
})();
}
if(!lt.util.load.provided_QMARK_('lt.plugins.modific.vcs')) {
goog.provide('lt.plugins.modific.vcs');
goog.require('cljs.core');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.files');
goog.require('lt.objs.files');
goog.require('lt.plugins.modific.util');
goog.require('lt.plugins.modific.util');
goog.require('lt.plugins.modific.vcs.git');
goog.require('lt.plugins.modific.vcs.git');
lt.plugins.modific.vcs.file_name = (function file_name(editor){return new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)));
});
lt.plugins.modific.vcs.get_cwd = (function get_cwd(editor){return lt.objs.files.parent.call(null,lt.plugins.modific.vcs.file_name.call(null,editor));
});
lt.plugins.modific.vcs.find_vcs = (function find_vcs(editor){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vcs","vcs",1014020824),lt.plugins.modific.vcs.git.vcs,new cljs.core.Keyword(null,"root","root",1017410644),lt.plugins.modific.util.vcs_root.call(null,lt.plugins.modific.vcs.git.vcs,lt.plugins.modific.vcs.get_cwd.call(null,editor))], null);
});
lt.plugins.modific.vcs.vcs_not_found = (function vcs_not_found(editor){lt.object.merge_BANG_.call(null,editor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vcs-obj","vcs-obj",1307097474),new cljs.core.Keyword(null,"no-vcs","no-vcs",4267078860)], null));
return null;
});
lt.plugins.modific.vcs.__GT_vcs = (function() {
var __GT_vcs = null;
var __GT_vcs__1 = (function (editor){var vcs_obj = new cljs.core.Keyword(null,"vcs-obj","vcs-obj",1307097474).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));if(cljs.core._EQ_.call(null,vcs_obj,new cljs.core.Keyword(null,"no-vcs","no-vcs",4267078860)))
{return null;
} else
{if(cljs.core.map_QMARK_.call(null,vcs_obj))
{return vcs_obj;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return __GT_vcs.call(null,editor,true);
} else
{return null;
}
}
}
});
var __GT_vcs__2 = (function (editor,cache_empty_QMARK_){var temp__4090__auto__ = lt.plugins.modific.vcs.find_vcs.call(null,editor);if(cljs.core.truth_(temp__4090__auto__))
{var vcs_obj = temp__4090__auto__;if(cljs.core.truth_(new cljs.core.Keyword(null,"root","root",1017410644).cljs$core$IFn$_invoke$arity$1(vcs_obj)))
{lt.object.merge_BANG_.call(null,editor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vcs-obj","vcs-obj",1307097474),vcs_obj], null));
return vcs_obj;
} else
{return null;
}
} else
{return lt.plugins.modific.vcs.vcs_not_found.call(null,editor);
}
});
__GT_vcs = function(editor,cache_empty_QMARK_){
switch(arguments.length){
case 1:
return __GT_vcs__1.call(this,editor);
case 2:
return __GT_vcs__2.call(this,editor,cache_empty_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_vcs.cljs$core$IFn$_invoke$arity$1 = __GT_vcs__1;
__GT_vcs.cljs$core$IFn$_invoke$arity$2 = __GT_vcs__2;
return __GT_vcs;
})()
;
lt.plugins.modific.vcs.__BEH__refresh_on_save_as = (function __BEH__refresh_on_save_as(editor){return lt.object.merge_BANG_.call(null,editor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vcs-obj","vcs-obj",1307097474),null], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.modific.vcs","refresh-on-save-as","lt.plugins.modific.vcs/refresh-on-save-as",1628525868),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.modific.vcs.__BEH__refresh_on_save_as,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"save-as-rename!","save-as-rename!",4344908746),null], null), null));
lt.plugins.modific.vcs.diff_cmd = (function diff_cmd(editor){var temp__4092__auto__ = lt.plugins.modific.vcs.__GT_vcs.call(null,editor);if(cljs.core.truth_(temp__4092__auto__))
{var map__8124 = temp__4092__auto__;var map__8124__$1 = ((cljs.core.seq_QMARK_.call(null,map__8124))?cljs.core.apply.call(null,cljs.core.hash_map,map__8124):map__8124);var root = cljs.core.get.call(null,map__8124__$1,new cljs.core.Keyword(null,"root","root",1017410644));var vcs = cljs.core.get.call(null,map__8124__$1,new cljs.core.Keyword(null,"vcs","vcs",1014020824));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cmd","cmd",1014002860),lt.plugins.modific.util.diff_cmd.call(null,vcs,lt.plugins.modific.vcs.file_name.call(null,editor)),new cljs.core.Keyword(null,"root","root",1017410644),root], null);
} else
{return null;
}
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.modific.diff')) {
goog.provide('lt.plugins.modific.diff');
goog.require('cljs.core');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.plugins.modific.vcs');
goog.require('lt.plugins.modific.vcs');
goog.require('lt.objs.proc');
goog.require('lt.objs.proc');
lt.plugins.modific.diff.diff__GT_hunks = (function diff__GT_hunks(diff){var re_header = /^@@[0-9\-, ]+\+(\d+)/;var lines = cljs.core.filter.call(null,cljs.core.complement.call(null,((function (re_header){
return (function (p1__8499_SHARP_){return cljs.core._EQ_.call(null,"\\",cljs.core.first.call(null,p1__8499_SHARP_));
});})(re_header))
),cljs.core.drop_while.call(null,cljs.core.complement.call(null,((function (re_header){
return (function (p1__8498_SHARP_){return cljs.core.re_find.call(null,re_header,p1__8498_SHARP_);
});})(re_header))
),clojure.string.split_lines.call(null,diff)));var hunks = cljs.core.PersistentVector.EMPTY;var buffer = cljs.core.PersistentVector.EMPTY;var hunk_start = cljs.core.last.call(null,cljs.core.re_find.call(null,re_header,cljs.core.first.call(null,lines)));var lines__$1 = cljs.core.rest.call(null,lines);while(true){
if(cljs.core.empty_QMARK_.call(null,lines__$1))
{if(cljs.core.empty_QMARK_.call(null,buffer))
{return hunks;
} else
{return cljs.core.conj.call(null,hunks,buffer);
}
} else
{{
var G__8512 = (cljs.core.truth_((function (){var and__6352__auto__ = hunk_start;if(cljs.core.truth_(and__6352__auto__))
{return cljs.core.not_empty.call(null,buffer);
} else
{return and__6352__auto__;
}
})())?cljs.core.conj.call(null,hunks,buffer):hunks);
var G__8513 = (cljs.core.truth_(hunk_start)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hunk_start | 0),cljs.core.first.call(null,lines__$1)], null):cljs.core.conj.call(null,buffer,cljs.core.first.call(null,lines__$1)));
var G__8514 = cljs.core.last.call(null,cljs.core.re_find.call(null,re_header,cljs.core.first.call(null,lines__$1)));
var G__8515 = cljs.core.rest.call(null,lines__$1);
hunks = G__8512;
buffer = G__8513;
hunk_start = G__8514;
lines__$1 = G__8515;
continue;
}
}
break;
}
});
lt.plugins.modific.diff.__GT_chunks = (function __GT_chunks(diff,line_ending){var hunks = lt.plugins.modific.diff.diff__GT_hunks.call(null,diff);var __GT_key = ((function (hunks){
return (function (line){var pred__8505 = cljs.core._EQ_;var expr__8506 = cljs.core.first.call(null,line);if(cljs.core.truth_(pred__8505.call(null,"-",expr__8506)))
{return new cljs.core.Keyword(null,"-","-",1013904287);
} else
{if(cljs.core.truth_(pred__8505.call(null,"+",expr__8506)))
{return new cljs.core.Keyword(null,"+","+",1013904285);
} else
{return null;
}
}
});})(hunks))
;var __GT_chunk = ((function (hunks,__GT_key){
return (function (buffer,mod_type,mod_start_line,cur_line){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"removed","removed",2105740242),((cljs.core.empty_QMARK_.call(null,buffer))?null:clojure.string.join.call(null,line_ending,buffer)),new cljs.core.Keyword(null,"mod-type","mod-type",4638379671),mod_type,new cljs.core.Keyword(null,"lines","lines",1116881521),((cljs.core._EQ_.call(null,mod_start_line,cur_line))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur_line], null):cljs.core.range.call(null,mod_start_line,cur_line))], null);
});})(hunks,__GT_key))
;return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (hunks,__GT_key,__GT_chunk){
return (function (p__8508){var vec__8509 = p__8508;var i = cljs.core.nth.call(null,vec__8509,0,null);var lines = cljs.core.nthnext.call(null,vec__8509,1);var prev_k = null;var i__$1 = i;var chunks = cljs.core.PersistentVector.EMPTY;var buffer = cljs.core.PersistentVector.EMPTY;var mod_start = null;var lines__$1 = lines;var k = __GT_key.call(null,cljs.core.first.call(null,lines__$1));while(true){
if(cljs.core.empty_QMARK_.call(null,lines__$1))
{if(cljs.core.truth_((function (){var or__6364__auto__ = cljs.core.not_empty.call(null,buffer);if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return mod_start;
}
})()))
{return cljs.core.conj.call(null,chunks,__GT_chunk.call(null,buffer,prev_k,mod_start,i__$1));
} else
{return chunks;
}
} else
{{
var G__8516 = (cljs.core.truth_((function (){var and__6352__auto__ = k;if(cljs.core.truth_(and__6352__auto__))
{var and__6352__auto____$1 = prev_k;if(cljs.core.truth_(and__6352__auto____$1))
{return cljs.core.not_EQ_.call(null,prev_k,k);
} else
{return and__6352__auto____$1;
}
} else
{return and__6352__auto__;
}
})())?new cljs.core.Keyword(null,"*","*",1013904284):k);
var G__8517 = ((cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"-","-",1013904287)))?i__$1:(i__$1 + 1));
var G__8518 = (cljs.core.truth_((function (){var and__6352__auto__ = cljs.core.not.call(null,k);if(and__6352__auto__)
{var or__6364__auto__ = cljs.core.not_empty.call(null,buffer);if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return mod_start;
}
} else
{return and__6352__auto__;
}
})())?cljs.core.conj.call(null,chunks,__GT_chunk.call(null,buffer,prev_k,mod_start,i__$1)):chunks);
var G__8519 = ((cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"-","-",1013904287)))?cljs.core.conj.call(null,buffer,cljs.core.subs.call(null,cljs.core.first.call(null,lines__$1),1)):(cljs.core.truth_(k)?buffer:cljs.core.PersistentVector.EMPTY));
var G__8520 = (cljs.core.truth_(k)?(function (){var or__6364__auto__ = mod_start;if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return i__$1;
}
})():null);
var G__8521 = cljs.core.rest.call(null,lines__$1);
var G__8522 = __GT_key.call(null,cljs.core.first.call(null,cljs.core.rest.call(null,lines__$1)));
prev_k = G__8516;
i__$1 = G__8517;
chunks = G__8518;
buffer = G__8519;
mod_start = G__8520;
lines__$1 = G__8521;
k = G__8522;
continue;
}
}
break;
}
});})(hunks,__GT_key,__GT_chunk))
,hunks));
});
lt.plugins.modific.diff.parse_diff = (function parse_diff(diff,line_ending){return lt.plugins.modific.diff.__GT_chunks.call(null,diff,line_ending);
});
lt.plugins.modific.diff.__BEH__exec_cmd_error = (function __BEH__exec_cmd_error(obj,err){var error = [cljs.core.str("Error executing diff command: "),cljs.core.str(err.toString())].join('');cljs.core.println.call(null,error);
return lt.objs.notifos.working.call(null,error);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.modific.diff","exec-cmd-error","lt.plugins.modific.diff/exec-cmd-error",4618022516),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.modific.diff.__BEH__exec_cmd_error,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.error","proc.error",4143512802),null], null), null));
lt.plugins.modific.diff.__BEH__exec_cmd_out = (function __BEH__exec_cmd_out(editor,buffer){return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"diff","diff",1016987511),lt.plugins.modific.diff.parse_diff.call(null,buffer.toString(),new cljs.core.Keyword(null,"line-ending","line-ending",4015468690).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)))));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.modific.diff","exec-cmd-out","lt.plugins.modific.diff/exec-cmd-out",4639818734),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.modific.diff.__BEH__exec_cmd_out,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null));
lt.plugins.modific.diff.run = (function run(editor){var temp__4092__auto__ = lt.plugins.modific.vcs.diff_cmd.call(null,editor);if(cljs.core.truth_(temp__4092__auto__))
{var map__8511 = temp__4092__auto__;var map__8511__$1 = ((cljs.core.seq_QMARK_.call(null,map__8511))?cljs.core.apply.call(null,cljs.core.hash_map,map__8511):map__8511);var root = cljs.core.get.call(null,map__8511__$1,new cljs.core.Keyword(null,"root","root",1017410644));var cmd = cljs.core.get.call(null,map__8511__$1,new cljs.core.Keyword(null,"cmd","cmd",1014002860));return lt.objs.proc.exec.call(null,cljs.core.conj.call(null,cmd,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",1014014057),editor,new cljs.core.Keyword(null,"cwd","cwd",1014003170),root], null)));
} else
{return null;
}
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.modific.gutter')) {
goog.provide('lt.plugins.modific.gutter');
goog.require('cljs.core');
goog.require('lt.util.dom');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.plugins.modific.util');
goog.require('lt.plugins.modific.diff');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.plugins.modific.util');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.plugins.modific.diff');
lt.plugins.modific.gutter.__GT_gutter_markers = (function __GT_gutter_markers(diff,m_width,m_height){return cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (chunk){return cljs.core.map.call(null,(function (p1__8586_SHARP_){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[p1__8586_SHARP_,lt.plugins.modific.gutter.make_gutter_marker.call(null,new cljs.core.Keyword(null,"mod-type","mod-type",4638379671).cljs$core$IFn$_invoke$arity$1(chunk),m_width,m_height)],null));
}),new cljs.core.Keyword(null,"lines","lines",1116881521).cljs$core$IFn$_invoke$arity$1(chunk));
}),diff));
});
lt.plugins.modific.gutter.make_gutter_marker = (function make_gutter_marker(marker,width,height){var e__7755__auto__ = crate.core.html.call(null,(function (){var temp__4090__auto__ = (function (){var pred__8596 = cljs.core._EQ_;var expr__8597 = marker;if(cljs.core.truth_(pred__8596.call(null,new cljs.core.Keyword(null,"+","+",1013904285),expr__8597)))
{return "modific-add";
} else
{if(cljs.core.truth_(pred__8596.call(null,new cljs.core.Keyword(null,"-","-",1013904287),expr__8597)))
{return "modific-rem";
} else
{if(cljs.core.truth_(pred__8596.call(null,new cljs.core.Keyword(null,"*","*",1013904284),expr__8597)))
{return "modific-mod";
} else
{return null;
}
}
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var css_class = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("modific-gutter-marker "),cljs.core.str(css_class)].join(''),new cljs.core.Keyword(null,"style","style",1123684643),[cljs.core.str("width: "),cljs.core.str(width),cljs.core.str("px; height: "),cljs.core.str(height),cljs.core.str("px")].join('')], null)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715)], null);
}
})());var seq__8599_8611 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8600_8612 = null;var count__8601_8613 = 0;var i__8602_8614 = 0;while(true){
if((i__8602_8614 < count__8601_8613))
{var vec__8603_8615 = cljs.core._nth.call(null,chunk__8600_8612,i__8602_8614);var ev__7756__auto___8616 = cljs.core.nth.call(null,vec__8603_8615,0,null);var func__7757__auto___8617 = cljs.core.nth.call(null,vec__8603_8615,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8616,func__7757__auto___8617);
{
var G__8618 = seq__8599_8611;
var G__8619 = chunk__8600_8612;
var G__8620 = count__8601_8613;
var G__8621 = (i__8602_8614 + 1);
seq__8599_8611 = G__8618;
chunk__8600_8612 = G__8619;
count__8601_8613 = G__8620;
i__8602_8614 = G__8621;
continue;
}
} else
{var temp__4092__auto___8622 = cljs.core.seq.call(null,seq__8599_8611);if(temp__4092__auto___8622)
{var seq__8599_8623__$1 = temp__4092__auto___8622;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8599_8623__$1))
{var c__7112__auto___8624 = cljs.core.chunk_first.call(null,seq__8599_8623__$1);{
var G__8625 = cljs.core.chunk_rest.call(null,seq__8599_8623__$1);
var G__8626 = c__7112__auto___8624;
var G__8627 = cljs.core.count.call(null,c__7112__auto___8624);
var G__8628 = 0;
seq__8599_8611 = G__8625;
chunk__8600_8612 = G__8626;
count__8601_8613 = G__8627;
i__8602_8614 = G__8628;
continue;
}
} else
{var vec__8604_8629 = cljs.core.first.call(null,seq__8599_8623__$1);var ev__7756__auto___8630 = cljs.core.nth.call(null,vec__8604_8629,0,null);var func__7757__auto___8631 = cljs.core.nth.call(null,vec__8604_8629,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8630,func__7757__auto___8631);
{
var G__8632 = cljs.core.next.call(null,seq__8599_8623__$1);
var G__8633 = null;
var G__8634 = 0;
var G__8635 = 0;
seq__8599_8611 = G__8632;
chunk__8600_8612 = G__8633;
count__8601_8613 = G__8634;
i__8602_8614 = G__8635;
continue;
}
}
} else
{}
}
break;
}
return e__7755__auto__;
});
lt.plugins.modific.gutter.render_markers = (function render_markers(this$,diff){if(cljs.core.truth_(diff))
{var ed = lt.objs.editor.__GT_cm_ed.call(null,this$);var i = 0;var line_height = ed.defaultTextHeight();var width = (function (){var or__6364__auto__ = lt.plugins.modific.util.settings.call(null,new cljs.core.Keyword(null,"gutter-width","gutter-width",530388486));if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return 2;
}
})();var markers = lt.plugins.modific.gutter.__GT_gutter_markers.call(null,diff,width,line_height);lt.objs.editor.operation.call(null,this$,((function (ed,i,line_height,width,markers){
return (function (){lt.plugins.modific.gutter.add_gutter.call(null,this$);
lt.plugins.modific.gutter.remove_markers.call(null,this$);
cljs.core.doall.call(null,cljs.core.map.call(null,((function (ed,i,line_height,width,markers){
return (function (p__8607,marker){var vec__8608 = p__8607;var line = cljs.core.nth.call(null,vec__8608,0,null);var el = cljs.core.nth.call(null,vec__8608,1,null);return ed.setGutterMarker((line - 1),"modific-gutter",el);
});})(ed,i,line_height,width,markers))
,markers));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
});})(ed,i,line_height,width,markers))
);
return null;
} else
{lt.plugins.modific.gutter.add_gutter.call(null,this$);
return lt.plugins.modific.gutter.remove_markers.call(null,this$);
}
});
lt.plugins.modific.gutter.__BEH__add_gutter = (function __BEH__add_gutter(this$){return lt.plugins.modific.gutter.add_gutter.call(null,lt.objs.editor.pool.last_active.call(null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.modific.gutter","add-gutter","lt.plugins.modific.gutter/add-gutter",4403038870),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.modific.gutter.__BEH__add_gutter,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init.settings!","init.settings!",1010327666),null], null), null));
lt.plugins.modific.gutter.__BEH__add_markers = (function() {
var __BEH__add_markers = null;
var __BEH__add_markers__1 = (function (ed){return lt.plugins.modific.gutter.add_markers.call(null,ed);
});
var __BEH__add_markers__2 = (function (ed,content){lt.plugins.modific.gutter.add_markers.call(null,ed);
return content;
});
__BEH__add_markers = function(ed,content){
switch(arguments.length){
case 1:
return __BEH__add_markers__1.call(this,ed);
case 2:
return __BEH__add_markers__2.call(this,ed,content);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__BEH__add_markers.cljs$core$IFn$_invoke$arity$1 = __BEH__add_markers__1;
__BEH__add_markers.cljs$core$IFn$_invoke$arity$2 = __BEH__add_markers__2;
return __BEH__add_markers;
})()
;
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.modific.gutter","add-markers","lt.plugins.modific.gutter/add-markers",824113172),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.modific.gutter.__BEH__add_markers,new cljs.core.Keyword(null,"desc","desc",1016984067),"Modific: Refresh gutter",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",1017141378),null,new cljs.core.Keyword(null,"focus","focus",1111509066),null,new cljs.core.Keyword(null,"save+","save+",1123115456),null], null), null));
lt.plugins.modific.gutter.__BEH__on_diff_parsed = (function __BEH__on_diff_parsed(editor,diff){lt.object.merge_BANG_.call(null,editor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"diff","diff",1016987511),diff], null));
return lt.plugins.modific.gutter.render_markers.call(null,editor,diff);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.modific.gutter","on-diff-parsed","lt.plugins.modific.gutter/on-diff-parsed",2660684402),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.modific.gutter.__BEH__on_diff_parsed,new cljs.core.Keyword(null,"desc","desc",1016984067),"Modific: diff is parsed",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"diff","diff",1016987511),null], null), null));
lt.plugins.modific.gutter.add_gutter = (function add_gutter(this$){var current_gutters = cljs.core.set.call(null,cljs.core.js__GT_clj.call(null,lt.objs.editor.option.call(null,this$,"gutters")));var ed = lt.objs.editor.__GT_cm_ed.call(null,this$);var width = lt.plugins.modific.util.settings.call(null,new cljs.core.Keyword(null,"gutter-width","gutter-width",530388486));var gutter_div = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div.CodeMirror-gutters","div.CodeMirror-gutters",1932435974),lt.object.__GT_content.call(null,this$));lt.objs.editor.set_options.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gutters","gutters",1397798442),cljs.core.clj__GT_js.call(null,cljs.core.conj.call(null,current_gutters,"modific-gutter"))], null));
return lt.util.dom.set_css.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div.modific-gutter","div.modific-gutter",930940638),gutter_div),new cljs.core.PersistentArrayMap(null, 1, ["width",[cljs.core.str(width),cljs.core.str("px")].join('')], null));
});
lt.plugins.modific.gutter.add_markers = (function add_markers(ed){try{if((lt.objs.editor.line_count.call(null,ed) < (function (){var or__6364__auto__ = lt.plugins.modific.util.settings.call(null,new cljs.core.Keyword(null,"max.file.length","max.file.length",2426167680));if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return 1000;
}
})()))
{return lt.plugins.modific.diff.run.call(null,ed);
} else
{return null;
}
}catch (e8610){var e = e8610;lt.object.safe_report_error.call(null,[cljs.core.str("Modific - Error: "),cljs.core.str(e)].join(''));
return lt.object.safe_report_error.call(null,e);
}});
lt.plugins.modific.gutter.remove_markers = (function remove_markers(this$){return lt.objs.editor.__GT_cm_ed.call(null,this$).clearGutter("modific-gutter");
});
lt.plugins.modific.gutter.remove_gutter = (function remove_gutter(this$){lt.plugins.modific.gutter.remove_markers.call(null,this$);
lt.util.dom.remove.call(null,new cljs.core.Keyword(null,"div.modific-gutter","div.modific-gutter",930940638),lt.object.__GT_content.call(null,this$));
var gutter_8636 = cljs.core.js__GT_clj.call(null,lt.objs.editor.option.call(null,this$,"gutters"));lt.objs.editor.set_options.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gutters","gutters",1397798442),cljs.core.clj__GT_js.call(null,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["modific-gutter",null], null), null),gutter_8636))], null));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.modific')) {
goog.provide('lt.plugins.modific');
goog.require('cljs.core');
goog.require('lt.util.dom');
goog.require('lt.plugins.modific.gutter');
goog.require('lt.util.dom');
goog.require('lt.objs.command');
goog.require('lt.plugins.modific.gutter');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.objs.command');
lt.object.create.call(null,lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.modific","modific","lt.plugins.modific/modific",2106104319),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modific","modific",2240974955),null], null), null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"init.settings!","init.settings!",1010327666));
})));
lt.plugins.modific.show_diff = (function show_diff(){return null;
});
lt.plugins.modific.revert_changes = (function revert_changes(){return null;
});
lt.plugins.modific.jump_between_changes = (function jump_between_changes(){return null;
});
lt.plugins.modific.show_original = (function show_original(){return null;
});
lt.plugins.modific.uncommitted_files = (function uncommitted_files(){return null;
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.modific.commands')) {
goog.provide('lt.plugins.modific.commands');
goog.require('cljs.core');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.plugins.modific.util');
goog.require('lt.plugins.modific.diff');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
goog.require('lt.plugins.modific.util');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.plugins.modific.diff');
lt.plugins.modific.commands.go_to_change = (function go_to_change(dir){var ed = lt.objs.editor.pool.last_active.call(null);var diff = new cljs.core.Keyword(null,"diff","diff",1016987511).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));var last_line = lt.objs.editor.last_line.call(null,ed);return null;
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.modific.commands","goto-next-change","lt.plugins.modific.commands/goto-next-change",2873865861),new cljs.core.Keyword(null,"desc","desc",1016984067),"Modific: go to the next change",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.modific.commands.go_to_change.call(null,new cljs.core.Keyword(null,"next","next",1017282149));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.modific.commands","goto-prev-change","lt.plugins.modific.commands/goto-prev-change",1274935109),new cljs.core.Keyword(null,"desc","desc",1016984067),"Modific: go to the previous change",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.modific.commands.go_to_change.call(null,new cljs.core.Keyword(null,"prev","prev",1017353637));
})], null));
}

//# sourceMappingURL=modific_compiled.js.map