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
settings.cljs$lang$applyTo = (function (arglist__8272){
var more = cljs.core.seq(arglist__8272);
return settings__delegate(more);
});
settings.cljs$core$IFn$_invoke$arity$variadic = settings__delegate;
return settings;
})()
;
lt.plugins.modific.util.IVcs = (function (){var obj8271 = {};return obj8271;
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
lt.plugins.modific.vcs.git.vcs = (function (){if(typeof lt.plugins.modific.vcs.git.t8275 !== 'undefined')
{} else
{
/**
* @constructor
*/
lt.plugins.modific.vcs.git.t8275 = (function (meta8276){
this.meta8276 = meta8276;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
lt.plugins.modific.vcs.git.t8275.cljs$lang$type = true;
lt.plugins.modific.vcs.git.t8275.cljs$lang$ctorStr = "lt.plugins.modific.vcs.git/t8275";
lt.plugins.modific.vcs.git.t8275.cljs$lang$ctorPrWriter = (function (this__6931__auto__,writer__6932__auto__,opt__6933__auto__){return cljs.core._write.call(null,writer__6932__auto__,"lt.plugins.modific.vcs.git/t8275");
});
lt.plugins.modific.vcs.git.t8275.prototype.lt$plugins$modific$util$IVcs$ = true;
lt.plugins.modific.vcs.git.t8275.prototype.lt$plugins$modific$util$IVcs$vcs_root$arity$2 = (function (_,cwd){var self__ = this;
var ___$1 = this;return lt.plugins.modific.util.find_vcs_root.call(null,(function (){var or__6364__auto__ = lt.plugins.modific.vcs.git.s.call(null,new cljs.core.Keyword(null,"dir","dir",1014003711));if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return ".git";
}
})(),cwd);
});
lt.plugins.modific.vcs.git.t8275.prototype.lt$plugins$modific$util$IVcs$diff_cmd$arity$2 = (function (_,fname){var self__ = this;
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
lt.plugins.modific.vcs.git.t8275.prototype.lt$plugins$modific$util$IVcs$status_cmd$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",1964298941),(function (){var or__6364__auto__ = lt.plugins.modific.vcs.git.s.call(null,new cljs.core.Keyword(null,"bin","bin",1014001785));if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return "git";
}
})(),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["diff","status","--porcelain"], null)], null);
});
lt.plugins.modific.vcs.git.t8275.prototype.lt$plugins$modific$util$IVcs$parse_status$arity$2 = (function (_,status_out){var self__ = this;
var ___$1 = this;return status_out;
});
lt.plugins.modific.vcs.git.t8275.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8277){var self__ = this;
var _8277__$1 = this;return self__.meta8276;
});
lt.plugins.modific.vcs.git.t8275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8277,meta8276__$1){var self__ = this;
var _8277__$1 = this;return (new lt.plugins.modific.vcs.git.t8275(meta8276__$1));
});
lt.plugins.modific.vcs.git.__GT_t8275 = (function __GT_t8275(meta8276){return (new lt.plugins.modific.vcs.git.t8275(meta8276));
});
}
return (new lt.plugins.modific.vcs.git.t8275(null));
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
{var map__8274 = temp__4092__auto__;var map__8274__$1 = ((cljs.core.seq_QMARK_.call(null,map__8274))?cljs.core.apply.call(null,cljs.core.hash_map,map__8274):map__8274);var root = cljs.core.get.call(null,map__8274__$1,new cljs.core.Keyword(null,"root","root",1017410644));var vcs = cljs.core.get.call(null,map__8274__$1,new cljs.core.Keyword(null,"vcs","vcs",1014020824));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cmd","cmd",1014002860),lt.plugins.modific.util.diff_cmd.call(null,vcs,lt.plugins.modific.vcs.file_name.call(null,editor)),new cljs.core.Keyword(null,"root","root",1017410644),root], null);
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
return (function (p1__9450_SHARP_){return cljs.core._EQ_.call(null,"\\",cljs.core.first.call(null,p1__9450_SHARP_));
});})(re_header))
),cljs.core.drop_while.call(null,cljs.core.complement.call(null,((function (re_header){
return (function (p1__9449_SHARP_){return cljs.core.re_find.call(null,re_header,p1__9449_SHARP_);
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
var G__9463 = (cljs.core.truth_((function (){var and__6352__auto__ = hunk_start;if(cljs.core.truth_(and__6352__auto__))
{return cljs.core.not_empty.call(null,buffer);
} else
{return and__6352__auto__;
}
})())?cljs.core.conj.call(null,hunks,buffer):hunks);
var G__9464 = (cljs.core.truth_(hunk_start)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hunk_start | 0),cljs.core.first.call(null,lines__$1)], null):cljs.core.conj.call(null,buffer,cljs.core.first.call(null,lines__$1)));
var G__9465 = cljs.core.last.call(null,cljs.core.re_find.call(null,re_header,cljs.core.first.call(null,lines__$1)));
var G__9466 = cljs.core.rest.call(null,lines__$1);
hunks = G__9463;
buffer = G__9464;
hunk_start = G__9465;
lines__$1 = G__9466;
continue;
}
}
break;
}
});
lt.plugins.modific.diff.__GT_chunks = (function __GT_chunks(diff,line_ending){var hunks = lt.plugins.modific.diff.diff__GT_hunks.call(null,diff);var __GT_key = ((function (hunks){
return (function (line){var pred__9456 = cljs.core._EQ_;var expr__9457 = cljs.core.first.call(null,line);if(cljs.core.truth_(pred__9456.call(null,"-",expr__9457)))
{return new cljs.core.Keyword(null,"-","-",1013904287);
} else
{if(cljs.core.truth_(pred__9456.call(null,"+",expr__9457)))
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
return (function (p__9459){var vec__9460 = p__9459;var i = cljs.core.nth.call(null,vec__9460,0,null);var lines = cljs.core.nthnext.call(null,vec__9460,1);var prev_k = null;var i__$1 = i;var chunks = cljs.core.PersistentVector.EMPTY;var buffer = cljs.core.PersistentVector.EMPTY;var mod_start = null;var lines__$1 = lines;var k = __GT_key.call(null,cljs.core.first.call(null,lines__$1));while(true){
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
var G__9467 = (cljs.core.truth_((function (){var and__6352__auto__ = k;if(cljs.core.truth_(and__6352__auto__))
{var and__6352__auto____$1 = prev_k;if(cljs.core.truth_(and__6352__auto____$1))
{return cljs.core.not_EQ_.call(null,prev_k,k);
} else
{return and__6352__auto____$1;
}
} else
{return and__6352__auto__;
}
})())?new cljs.core.Keyword(null,"*","*",1013904284):k);
var G__9468 = ((cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"-","-",1013904287)))?i__$1:(i__$1 + 1));
var G__9469 = (cljs.core.truth_((function (){var and__6352__auto__ = cljs.core.not.call(null,k);if(and__6352__auto__)
{var or__6364__auto__ = cljs.core.not_empty.call(null,buffer);if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return mod_start;
}
} else
{return and__6352__auto__;
}
})())?cljs.core.conj.call(null,chunks,__GT_chunk.call(null,buffer,prev_k,mod_start,i__$1)):chunks);
var G__9470 = ((cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"-","-",1013904287)))?cljs.core.conj.call(null,buffer,cljs.core.subs.call(null,cljs.core.first.call(null,lines__$1),1)):(cljs.core.truth_(k)?buffer:cljs.core.PersistentVector.EMPTY));
var G__9471 = (cljs.core.truth_(k)?(function (){var or__6364__auto__ = mod_start;if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return i__$1;
}
})():null);
var G__9472 = cljs.core.rest.call(null,lines__$1);
var G__9473 = __GT_key.call(null,cljs.core.first.call(null,cljs.core.rest.call(null,lines__$1)));
prev_k = G__9467;
i__$1 = G__9468;
chunks = G__9469;
buffer = G__9470;
mod_start = G__9471;
lines__$1 = G__9472;
k = G__9473;
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
{var map__9462 = temp__4092__auto__;var map__9462__$1 = ((cljs.core.seq_QMARK_.call(null,map__9462))?cljs.core.apply.call(null,cljs.core.hash_map,map__9462):map__9462);var root = cljs.core.get.call(null,map__9462__$1,new cljs.core.Keyword(null,"root","root",1017410644));var cmd = cljs.core.get.call(null,map__9462__$1,new cljs.core.Keyword(null,"cmd","cmd",1014002860));return lt.objs.proc.exec.call(null,cljs.core.conj.call(null,cmd,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",1014014057),editor,new cljs.core.Keyword(null,"cwd","cwd",1014003170),root], null)));
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
lt.plugins.modific.gutter.__GT_gutter_markers = (function __GT_gutter_markers(diff,m_width,m_height){return cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (chunk){return cljs.core.map.call(null,(function (p1__12814_SHARP_){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[p1__12814_SHARP_,lt.plugins.modific.gutter.make_gutter_marker.call(null,new cljs.core.Keyword(null,"mod-type","mod-type",4638379671).cljs$core$IFn$_invoke$arity$1(chunk),m_width,m_height)],null));
}),new cljs.core.Keyword(null,"lines","lines",1116881521).cljs$core$IFn$_invoke$arity$1(chunk));
}),diff));
});
lt.plugins.modific.gutter.make_gutter_marker = (function make_gutter_marker(marker,width,height){var e__7755__auto__ = crate.core.html.call(null,(function (){var temp__4090__auto__ = (function (){var pred__12824 = cljs.core._EQ_;var expr__12825 = marker;if(cljs.core.truth_(pred__12824.call(null,new cljs.core.Keyword(null,"+","+",1013904285),expr__12825)))
{return "modific-add";
} else
{if(cljs.core.truth_(pred__12824.call(null,new cljs.core.Keyword(null,"-","-",1013904287),expr__12825)))
{return "modific-rem";
} else
{if(cljs.core.truth_(pred__12824.call(null,new cljs.core.Keyword(null,"*","*",1013904284),expr__12825)))
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
})());var seq__12827_12839 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__12828_12840 = null;var count__12829_12841 = 0;var i__12830_12842 = 0;while(true){
if((i__12830_12842 < count__12829_12841))
{var vec__12831_12843 = cljs.core._nth.call(null,chunk__12828_12840,i__12830_12842);var ev__7756__auto___12844 = cljs.core.nth.call(null,vec__12831_12843,0,null);var func__7757__auto___12845 = cljs.core.nth.call(null,vec__12831_12843,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___12844,func__7757__auto___12845);
{
var G__12846 = seq__12827_12839;
var G__12847 = chunk__12828_12840;
var G__12848 = count__12829_12841;
var G__12849 = (i__12830_12842 + 1);
seq__12827_12839 = G__12846;
chunk__12828_12840 = G__12847;
count__12829_12841 = G__12848;
i__12830_12842 = G__12849;
continue;
}
} else
{var temp__4092__auto___12850 = cljs.core.seq.call(null,seq__12827_12839);if(temp__4092__auto___12850)
{var seq__12827_12851__$1 = temp__4092__auto___12850;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12827_12851__$1))
{var c__7112__auto___12852 = cljs.core.chunk_first.call(null,seq__12827_12851__$1);{
var G__12853 = cljs.core.chunk_rest.call(null,seq__12827_12851__$1);
var G__12854 = c__7112__auto___12852;
var G__12855 = cljs.core.count.call(null,c__7112__auto___12852);
var G__12856 = 0;
seq__12827_12839 = G__12853;
chunk__12828_12840 = G__12854;
count__12829_12841 = G__12855;
i__12830_12842 = G__12856;
continue;
}
} else
{var vec__12832_12857 = cljs.core.first.call(null,seq__12827_12851__$1);var ev__7756__auto___12858 = cljs.core.nth.call(null,vec__12832_12857,0,null);var func__7757__auto___12859 = cljs.core.nth.call(null,vec__12832_12857,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___12858,func__7757__auto___12859);
{
var G__12860 = cljs.core.next.call(null,seq__12827_12851__$1);
var G__12861 = null;
var G__12862 = 0;
var G__12863 = 0;
seq__12827_12839 = G__12860;
chunk__12828_12840 = G__12861;
count__12829_12841 = G__12862;
i__12830_12842 = G__12863;
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
return (function (){lt.plugins.modific.gutter.remove_markers.call(null,this$);
cljs.core.doall.call(null,cljs.core.map.call(null,((function (ed,i,line_height,width,markers){
return (function (p__12835,marker){var vec__12836 = p__12835;var line = cljs.core.nth.call(null,vec__12836,0,null);var el = cljs.core.nth.call(null,vec__12836,1,null);return ed.setGutterMarker((line - 1),"modific-gutter",el);
});})(ed,i,line_height,width,markers))
,markers));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
});})(ed,i,line_height,width,markers))
);
return null;
} else
{return lt.plugins.modific.gutter.remove_markers.call(null,this$);
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
lt.plugins.modific.gutter.add_gutter = (function add_gutter(this$){var current_gutters = cljs.core.set.call(null,cljs.core.js__GT_clj.call(null,lt.objs.editor.option.call(null,this$,"gutters")));var ed = lt.objs.editor.__GT_cm_ed.call(null,this$);var width = lt.plugins.modific.util.settings.call(null,new cljs.core.Keyword(null,"gutter-width","gutter-width",530388486));var gutter_div = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div.CodeMirror-gutters","div.CodeMirror-gutters",1932435974),lt.object.__GT_content.call(null,this$));if(cljs.core.truth_(current_gutters.call(null,"modific-gutter")))
{return null;
} else
{lt.objs.editor.set_options.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gutters","gutters",1397798442),cljs.core.clj__GT_js.call(null,cljs.core.conj.call(null,current_gutters,"modific-gutter"))], null));
return lt.util.dom.set_css.call(null,lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div.modific-gutter","div.modific-gutter",930940638),gutter_div),new cljs.core.PersistentArrayMap(null, 1, ["width",[cljs.core.str(width),cljs.core.str("px")].join('')], null));
}
});
lt.plugins.modific.gutter.add_markers = (function add_markers(ed){try{if((lt.objs.editor.line_count.call(null,ed) < (function (){var or__6364__auto__ = lt.plugins.modific.util.settings.call(null,new cljs.core.Keyword(null,"max.file.length","max.file.length",2426167680));if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return 1000;
}
})()))
{lt.plugins.modific.gutter.add_gutter.call(null,ed);
return lt.plugins.modific.diff.run.call(null,ed);
} else
{return null;
}
}catch (e12838){var e = e12838;lt.object.safe_report_error.call(null,[cljs.core.str("Modific - Error: "),cljs.core.str(e)].join(''));
return lt.object.safe_report_error.call(null,e);
}});
lt.plugins.modific.gutter.remove_markers = (function remove_markers(this$){return lt.objs.editor.__GT_cm_ed.call(null,this$).clearGutter("modific-gutter");
});
lt.plugins.modific.gutter.remove_gutter = (function remove_gutter(this$){lt.plugins.modific.gutter.remove_markers.call(null,this$);
lt.util.dom.remove.call(null,new cljs.core.Keyword(null,"div.modific-gutter","div.modific-gutter",930940638),lt.object.__GT_content.call(null,this$));
var gutter_12864 = cljs.core.js__GT_clj.call(null,lt.objs.editor.option.call(null,this$,"gutters"));lt.objs.editor.set_options.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gutters","gutters",1397798442),cljs.core.clj__GT_js.call(null,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["modific-gutter",null], null), null),gutter_12864))], null));
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
goog.require('lt.plugins.doc');
goog.require('lt.plugins.doc');
goog.require('lt.plugins.modific.diff');
lt.plugins.modific.commands.get_line = (function get_line(current,diff,dir){var next_QMARK_ = cljs.core._EQ_.call(null,dir,new cljs.core.Keyword(null,"next","next",1017282149));var or__6364__auto__ = cljs.core.some.call(null,((function (next_QMARK_){
return (function (p__8137){var map__8138 = p__8137;var map__8138__$1 = ((cljs.core.seq_QMARK_.call(null,map__8138))?cljs.core.apply.call(null,cljs.core.hash_map,map__8138):map__8138);var lines = cljs.core.get.call(null,map__8138__$1,new cljs.core.Keyword(null,"lines","lines",1116881521));if(cljs.core.truth_(((next_QMARK_)?cljs.core._LT_:cljs.core._GT_).call(null,current,cljs.core.first.call(null,lines))))
{return cljs.core.first.call(null,lines);
} else
{return null;
}
});})(next_QMARK_))
,((next_QMARK_)?diff:cljs.core.reverse.call(null,diff)));if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return cljs.core.first.call(null,new cljs.core.Keyword(null,"lines","lines",1116881521).cljs$core$IFn$_invoke$arity$1(((next_QMARK_)?cljs.core.first:cljs.core.last).call(null,diff)));
}
});
lt.plugins.modific.commands.go_to_change = (function go_to_change(dir){var ed = lt.objs.editor.pool.last_active.call(null);var diff = new cljs.core.Keyword(null,"diff","diff",1016987511).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));var line = (new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,ed)) + 1);if(cljs.core.truth_((function (){var and__6352__auto__ = (cljs.core.count.call(null,diff) > 0);if(and__6352__auto__)
{return line;
} else
{return and__6352__auto__;
}
})()))
{return lt.objs.editor.move_cursor.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",1013907415),0,new cljs.core.Keyword(null,"line","line",1017226086),(lt.plugins.modific.commands.get_line.call(null,line,diff,dir) - 1)], null));
} else
{return null;
}
});
lt.plugins.modific.commands.get_original = (function get_original(ed,line){var temp__4092__auto__ = new cljs.core.Keyword(null,"diff","diff",1016987511).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed));if(cljs.core.truth_(temp__4092__auto__))
{var diff = temp__4092__auto__;return cljs.core.some.call(null,((function (diff,temp__4092__auto__){
return (function (p__8141){var map__8142 = p__8141;var map__8142__$1 = ((cljs.core.seq_QMARK_.call(null,map__8142))?cljs.core.apply.call(null,cljs.core.hash_map,map__8142):map__8142);var lines = cljs.core.get.call(null,map__8142__$1,new cljs.core.Keyword(null,"lines","lines",1116881521));var removed = cljs.core.get.call(null,map__8142__$1,new cljs.core.Keyword(null,"removed","removed",2105740242));if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([line], true),lines)))
{return removed;
} else
{return null;
}
});})(diff,temp__4092__auto__))
,diff);
} else
{return null;
}
});
lt.plugins.modific.commands.original_ui = (function original_ui(text){var e__7755__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline-doc","div.inline-doc",3323486451),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),text], null)], null));var seq__8149_8165 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8150_8166 = null;var count__8151_8167 = 0;var i__8152_8168 = 0;while(true){
if((i__8152_8168 < count__8151_8167))
{var vec__8153_8169 = cljs.core._nth.call(null,chunk__8150_8166,i__8152_8168);var ev__7756__auto___8170 = cljs.core.nth.call(null,vec__8153_8169,0,null);var func__7757__auto___8171 = cljs.core.nth.call(null,vec__8153_8169,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8170,func__7757__auto___8171);
{
var G__8172 = seq__8149_8165;
var G__8173 = chunk__8150_8166;
var G__8174 = count__8151_8167;
var G__8175 = (i__8152_8168 + 1);
seq__8149_8165 = G__8172;
chunk__8150_8166 = G__8173;
count__8151_8167 = G__8174;
i__8152_8168 = G__8175;
continue;
}
} else
{var temp__4092__auto___8176 = cljs.core.seq.call(null,seq__8149_8165);if(temp__4092__auto___8176)
{var seq__8149_8177__$1 = temp__4092__auto___8176;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8149_8177__$1))
{var c__7112__auto___8178 = cljs.core.chunk_first.call(null,seq__8149_8177__$1);{
var G__8179 = cljs.core.chunk_rest.call(null,seq__8149_8177__$1);
var G__8180 = c__7112__auto___8178;
var G__8181 = cljs.core.count.call(null,c__7112__auto___8178);
var G__8182 = 0;
seq__8149_8165 = G__8179;
chunk__8150_8166 = G__8180;
count__8151_8167 = G__8181;
i__8152_8168 = G__8182;
continue;
}
} else
{var vec__8154_8183 = cljs.core.first.call(null,seq__8149_8177__$1);var ev__7756__auto___8184 = cljs.core.nth.call(null,vec__8154_8183,0,null);var func__7757__auto___8185 = cljs.core.nth.call(null,vec__8154_8183,1,null);lt.util.dom.on.call(null,e__7755__auto__,ev__7756__auto___8184,func__7757__auto___8185);
{
var G__8186 = cljs.core.next.call(null,seq__8149_8177__$1);
var G__8187 = null;
var G__8188 = 0;
var G__8189 = 0;
seq__8149_8165 = G__8186;
chunk__8150_8166 = G__8187;
count__8151_8167 = G__8188;
i__8152_8168 = G__8189;
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
lt.plugins.modific.commands.show_original = (function show_original(){var ed = lt.objs.editor.pool.last_active.call(null);var line = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,ed));var temp__4090__auto___8190 = lt.plugins.doc.doc_on_line_QMARK_.call(null,ed,line);if(cljs.core.truth_(temp__4090__auto___8190))
{var cur_8191 = temp__4090__auto___8190;lt.plugins.doc.remove_BANG_.call(null,ed,cur_8191);
} else
{var temp__4092__auto___8192 = lt.plugins.modific.commands.get_original.call(null,ed,(line + 1));if(cljs.core.truth_(temp__4092__auto___8192))
{var original_8193 = temp__4092__auto___8192;lt.plugins.doc.inline_doc.call(null,ed,lt.plugins.doc.doc_ui.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1014003882),original_8193], null)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),line], null));
} else
{}
}
return null;
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.modific.commands","goto-next-change","lt.plugins.modific.commands/goto-next-change",2873865861),new cljs.core.Keyword(null,"desc","desc",1016984067),"Modific: go to the next change",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.modific.commands.go_to_change.call(null,new cljs.core.Keyword(null,"next","next",1017282149));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.modific.commands","goto-prev-change","lt.plugins.modific.commands/goto-prev-change",1274935109),new cljs.core.Keyword(null,"desc","desc",1016984067),"Modific: go to the previous change",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.modific.commands.go_to_change.call(null,new cljs.core.Keyword(null,"prev","prev",1017353637));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.modific.commands","show-original","lt.plugins.modific.commands/show-original",4661252808),new cljs.core.Keyword(null,"desc","desc",1016984067),"Modific: show original",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.modific.commands.show_original.call(null);
})], null));
}

//# sourceMappingURL=modific_compiled.js.map