// <nowiki>
$(function() {
  mw.loader.using( [ 'mediawiki.util', 'jquery.i18n', 'jquery.ui', 'oojs-ui-core', 'oojs-ui-widgets' ], function () {
    /* 国際化ここから */
    $.i18n( { locale: mw.config.get('wgUserLanguage') } );
    $.i18n().load( {
      'en' : {
        'ajxAT-portlet-detail' : 'Open the admin tools menu',
        'ajxAT-portlet-link' : 'AdminTools',
        'ajxATdialog-block-caption' : 'Block',
        'ajxATdialog-block-opt-account' : 'Account creation',
        'ajxATdialog-block-opt-auto' : 'Auto block',
        'ajxATdialog-block-opt-email' : 'Sending email',
        'ajxATdialog-block-opt-hard' : 'Hard block',
        'ajxATdialog-block-opt-talk' : 'Own talk page',
        'ajxATdialog-block-revdeluser': 'Remove username from revisions/logs',
        'ajxATdialog-block-revdeluser-reason': 'Reason for removing username',
        'ajxATdialog-cancel' : 'Cancel',
        'ajxATdialog-delete-caption' : 'Delete',
        'ajxATdialog-err-block-expiry-other': 'If you want to block other duration, please specify in the additional box next to it.',
        'ajxATdialog-err-block-reason-other': 'Please select or input the reason for blocking.',
        'ajxATdialog-err-block-revdeluser-reason-other': 'Please select or input the reason for revision deleting username.',
        'ajxATdialog-err-delete-reason-other': 'Please select or input the reason for deletion.',
        'ajxATdialog-err-overflow-1': 'Cannot revdel because the number of items in either revisions or logs, or both, is more than 50.',
        'ajxATdialog-err-overflow-2': 'Cannot revdel because logs are more than 50.',
        'ajxATdialog-err-protect-reason-other': 'Please select the reason for protection.',
        'ajxATdialog-execute' : 'Execute',
        'ajxATdialog-execute-block': 'Block Executing...',
        'ajxATdialog-execute-block-revdeluser-revs': 'Revdel revisions Executing...',
        'ajxATdialog-execute-block-revdeluser-logs-1': 'Revdel user-created logs Executing...',
        'ajxATdialog-execute-block-revdeluser-logs-2': 'Revdel logs of actions against users Executing...',
        'ajxATdialog-execute-delete': 'Delete Executing...',
        'ajxATdialog-execute-protect': 'Protect Executing...',
        'ajxATdialog-expiration': 'Expiration',
        'ajxATdialog-expiry-1hours': '1 hours',
        'ajxATdialog-expiry-2hours': '2 hours',
        'ajxATdialog-expiry-1day': '1 day',
        'ajxATdialog-expiry-31hours': '31 hours',
        'ajxATdialog-expiry-3days': '3 days',
        'ajxATdialog-expiry-1week': '1 week',
        'ajxATdialog-expiry-2weeks': '2 weeks',
        'ajxATdialog-expiry-1month': '1 month',
        'ajxATdialog-expiry-3months': '3 months',
        'ajxATdialog-expiry-6months': '6 months',
        'ajxATdialog-expiry-1year': '1 year',
        'ajxATdialog-expiry-infinite': 'infinite',
        'ajxATdialog-expiry-other': 'Other time',
        'ajxATdialog-gswiki': 'GS wiki',
        'ajxATdialog-gswiki-local': 'You are local sysop',
        'ajxATdialog-gswiki-no': 'Non-GS wiki',
        'ajxATdialog-gswiki-progress': 'Checking in progress',
        'ajxATdialog-gswiki-yes': 'GS wiki',
        'ajxATdialog-mode': 'Mode',
        'ajxATdialog-opt-block' : 'Block',
        'ajxATdialog-opt-delete' : 'Delete',
        'ajxATdialog-opt-protect' : 'Protect',
        'ajxATdialog-protect-caption' : 'Protect',
        'ajxATdialog-protect-level-all': 'All users',
        'ajxATdialog-protect-level-autoconfirmed': 'Autoconfirmed users',
        'ajxATdialog-protect-level-sysop': 'Sysop',
        'ajxATdialog-protect-restr-create': 'Create',
        'ajxATdialog-protect-restr-edit': 'Edit',
        'ajxATdialog-protect-restr-move': 'Move',
        'ajxATdialog-reason' : 'Reason',
        'ajxATdialog-reason-gs' : 'GS reasons',
        'ajxATdialog-reason-pls': 'Please select a reason.',
        'ajxATdialog-success-block': 'Successfully blocked.',
        'ajxATdialog-success-delete': 'Successfully deleted.',
        'ajxATdialog-success-protect': 'Successfully protected.',
        'ajxATdialog-success-revdeluser-revs': 'Successfully removed username from revisions.',
        'ajxATdialog-success-revdeluser-logs-1': 'Successfully removed username from user-created logs.',
        'ajxATdialog-success-revdeluser-logs-2': 'Successfully removed username from logs of actions against users.',
        'ajxATdialog-suffix': 'Suffix',
        'ajxATdialog-suffix-pls': 'Please select as needed',
        'ajxATdialog-suffix-gs': 'Global sysop',
        'ajxATdialog-target-page' : 'Target page',
        'ajxATdialog-target-user' : 'Target user',
        'ajxATdialog-title' : 'Ajax Admin Tools',
      },
      'ja' : {
        'ajxAT-portlet-detail' : '管理者ツールメニューを開く',
        'ajxAT-portlet-link' : '管理者ツール',
        'ajxATdialog-block-caption' : 'ブロック',
        'ajxATdialog-block-opt-account' : 'アカウント作成',
        'ajxATdialog-block-opt-auto' : '自動ブロック',
        'ajxATdialog-block-opt-email' : 'メール送信',
        'ajxATdialog-block-opt-hard' : 'ハードブロック',
        'ajxATdialog-block-opt-talk' : '会話ページ',
        'ajxATdialog-block-revdeluser': '版/記録から利用者名を除去',
        'ajxATdialog-block-revdeluser-reason': '利用者名の除去理由',
        'ajxATdialog-cancel' : '中止',
        'ajxATdialog-delete-caption' : '削除',
        'ajxATdialog-err-block-expiry-other': 'その他の期間ブロックしたい場合、横のボックスに期間を入力してください。',
        'ajxATdialog-err-block-reason-other': 'ブロックする理由を選択または入力してください。',
        'ajxATdialog-err-block-revdeluser-reason-other': '名前を版指定削除する理由を選択または入力してください。',
        'ajxATdialog-err-delete-reason-other': '削除する理由を選択または入力してください。',
        'ajxATdialog-err-overflow-1': '版か記録のどちらか、あるいは両方の項目数が50以上あるため版指定削除できません。',
        'ajxATdialog-err-overflow-2': '記録項目数が50以上あるため版指定削除できません。',
        'ajxATdialog-err-protect-reason-other': '保護する理由を選択してください。',
        'ajxATdialog-execute' : '実行',
        'ajxATdialog-execute-block': 'ブロック中...',
        'ajxATdialog-execute-block-revdeluser-revs': '版の版指定削除中...',
        'ajxATdialog-execute-block-revdeluser-logs-1': '利用者が作成した記録の版指定削除中...',
        'ajxATdialog-execute-block-revdeluser-logs-2': '利用者に対して行われた操作記録の版指定削除中...',
        'ajxATdialog-execute-delete': '削除中...',
        'ajxATdialog-execute-protect': '保護中...',
        'ajxATdialog-expiration': '期間',
        'ajxATdialog-expiry-1hours': '1時間',
        'ajxATdialog-expiry-2hours': '2時間',
        'ajxATdialog-expiry-1day': '1日',
        'ajxATdialog-expiry-31hours': '31時間',
        'ajxATdialog-expiry-3days': '3日',
        'ajxATdialog-expiry-1week': '1週間',
        'ajxATdialog-expiry-2weeks': '2週間',
        'ajxATdialog-expiry-1month': '1ヶ月',
        'ajxATdialog-expiry-3months': '3ヶ月',
        'ajxATdialog-expiry-6months': '6ヶ月',
        'ajxATdialog-expiry-1year': '1年',
        'ajxATdialog-expiry-infinite': '無期限',
        'ajxATdialog-expiry-other': 'その他',
        'ajxATdialog-gswiki': 'GSウィキ',
        'ajxATdialog-gswiki-local': 'あなたはローカルの管理者です。',
        'ajxATdialog-gswiki-no': '非GSウィキ',
        'ajxATdialog-gswiki-progress': '確認中',
        'ajxATdialog-gswiki-yes': 'GSウィキ',
        'ajxATdialog-mode': 'モード',
        'ajxATdialog-opt-block' : 'ブロック',
        'ajxATdialog-opt-delete' : '削除',
        'ajxATdialog-opt-protect' : '保護',
        'ajxATdialog-protect-caption' : '保護',
        'ajxATdialog-protect-level-all': 'すべての利用者',
        'ajxATdialog-protect-level-autoconfirmed': '自動承認された利用者',
        'ajxATdialog-protect-level-sysop': '管理者',
        'ajxATdialog-protect-restr-create': '作成',
        'ajxATdialog-protect-restr-edit': '編集',
        'ajxATdialog-protect-restr-move': '移動',
        'ajxATdialog-reason' : '理由',
        'ajxATdialog-reason-gs' : 'GSの理由',
        'ajxATdialog-reason-pls': '理由を選択してください',
        'ajxATdialog-success-block': 'ブロックに成功しました。',
        'ajxATdialog-success-delete': '削除に成功しました。',
        'ajxATdialog-success-protect': '保護に成功しました。',
        'ajxATdialog-success-revdeluser-revs': '版から利用者名の除去に成功しました。',
        'ajxATdialog-success-revdeluser-logs-1': '利用者が作成した記録の除去に成功しました。',
        'ajxATdialog-success-revdeluser-logs-2': '利用者に対して行われた操作記録の除去に成功しました。',
        'ajxATdialog-suffix': '接尾辞',
        'ajxATdialog-suffix-pls': '必要に応じて選択してください',
        'ajxATdialog-suffix-gs': 'グローバル管理者',
        'ajxATdialog-target-page' : '対象ページ',
        'ajxATdialog-target-user' : '対象利用者',
        'ajxATdialog-title' : 'Ajax Admin Tools',
      },
    } );
    var AjxAT = {
      Api: new mw.Api(),
      DefaultTargetPage: '',
      DefaultTargetUser: '',
      DefaultMode: null,
      Existence: (mw.config.get( 'wgArticleId' ) === 0 ? false : true),
      GlobalSysop: mw.config.get('wgGlobalGroups').includes("global-sysop"),
      Inoperable: null,
      LocalSyaop: mw.config.get('wgUserGroups').includes("sysop"),
      Mode: 'block',
      NSNum: mw.config.get( 'wgNamespaceNumber' ),
      Restr: null,
      SpName: mw.config.get( 'wgCanonicalSpecialPageName' ),
      Suffix_GS: ' ([[:m:Special:MyLanguage/GS|global sysop]] action)',
      PageName: mw.config.get( 'wgPageName' ),
      RelevantUserName: mw.config.get( 'wgRelevantUserName' ),
      UserRelated: (mw.config.get( 'wgRelevantUserName' ) === null ? false : true),
    };
    if (AjxAT.UserRelated) {/* 利用者関係のとき => ブロック*/
      AjxAT.DefaultTargetUser = AjxAT.RelevantUserName;
      if (!AjxAT.SpName) {
        AjxAT.DefaultTargetPage = AjxAT.PageName;
      }
      AjxAT.DefaultMode = "block";
    } else if (!AjxAT.UserRelated && AjxAT.SpName == false && AjxAT.Existence) {/* 利用者関係ではなく、特別ページではなく、ページが存在するとき => 削除*/
      AjxAT.DefaultTargetPage = AjxAT.PageName;
      AjxAT.DefaultMode = "delete";
    } else if (!AjxAT.UserRelated && AjxAT.SpName == false && !AjxAT.Existence) {/* 利用者関係ではなく、特別ページではなく、ページが存在しないとき => 保護*/
      AjxAT.DefaultTargetPage = AjxAT.PageName;
      AjxAT.DefaultMode = "protect";
    }

    /* Dialog本体 */
    var options_block = `<option value='infinite'>${$.i18n('ajxATdialog-expiry-infinite')}</option>
      <option value='2 hours'>${$.i18n('ajxATdialog-expiry-2hours')}</option>
      <option value='1 day'>${$.i18n('ajxATdialog-expiry-1day')}</option>
      <option value='31 hours'>${$.i18n('ajxATdialog-expiry-31hours')}</option>
      <option value='3 days'>${$.i18n('ajxATdialog-expiry-3days')}</option>
      <option value='1 week'>${$.i18n('ajxATdialog-expiry-1week')}</option>
      <option value='2 weeks'>${$.i18n('ajxATdialog-expiry-2weeks')}</option>
      <option value='1 month'>${$.i18n('ajxATdialog-expiry-1month')}</option>
      <option value='3 months'>${$.i18n('ajxATdialog-expiry-3months')}</option>
      <option value='6 months'>${$.i18n('ajxATdialog-expiry-6months')}</option>
      <option value='1 year'>${$.i18n('ajxATdialog-expiry-1year')}</option>
      <option value='other'>${$.i18n('ajxATdialog-expiry-other')}</option>
      `;
    var options_protect = `<option value='1 hours'>${$.i18n('ajxATdialog-expiry-1hours')}</option>
      <option value='1 day'>${$.i18n('ajxATdialog-expiry-1day')}</option>
      <option value='1 week'>${$.i18n('ajxATdialog-expiry-1week')}</option>
      <option value='2 weeks'>${$.i18n('ajxATdialog-expiry-2weeks')}</option>
      <option value='1 month'>${$.i18n('ajxATdialog-expiry-1month')}</option>
      <option value='3 months'>${$.i18n('ajxATdialog-expiry-3months')}</option>
      <option value='6 months'>${$.i18n('ajxATdialog-expiry-6months')}</option>
      <option value='1 year'>${$.i18n('ajxATdialog-expiry-1year')}</option>
      <option value='infinite'>${$.i18n('ajxATdialog-expiry-infinite')}</option>
      <option value='other'>${$.i18n('ajxATdialog-expiry-other')}</option>`;
    var reasons_block = `<option value=''>${$.i18n('ajxATdialog-reason-pls')}</option>
      <optgroup label='${$.i18n('ajxATdialog-reason-gs')}'>
      <option value='Vandalism'>Vandalism</option>
      <option value='Vandalism-only account'>Vandalism-only account</option>
      <option value='Spam'>Spam</option>
      <option value='Spam-only account'>Spam-only account</option>
      <option value='Long-term abuse'>Long-term abuse</option>
      <option value='[[:m:NOP|Open proxy]]'>[[:m:NOP|Open proxy]]</option>
      <option value='Cross-wiki abuse'>Cross-wiki abuse</option>
      <option value="Removing content from pages">Removing content from pages</option>
      <option value="Inserting nonsense/gibberish into pages">Inserting nonsense/gibberish into pages</option>
      <option value="Creating pages or inserting material out of project scope">Creating pages or inserting material out of project scope</option>
      </optgroup>`;
    var reasons_revdel = `<option value=''>${$.i18n('ajxATdialog-reason-pls')}</option>
      <optgroup label='${$.i18n('ajxATdialog-reason-gs')}'>
      <option value='Grossly insulting, degrading, or offensive material'>Grossly insulting, degrading, or offensive material</option>
      <option value='Removing copyright infringement on history'>Removing copyright infringement on history</option>
      <option value='Hiding vandalism/attack'>Hiding vandalism/attack</option>
      <option value='Private information'>Private information</option>
      </optgroup>`;
    var reasons_delete = `<option value=''>${$.i18n('ajxATdialog-reason-pls')}</option>
      <optgroup label='${$.i18n('ajxATdialog-reason-gs')}'>
      <option value='Vandalism'>Vandalism</option>
      <option value='Spam'>Spam</option>
      <option value='No useful content'>No useful content</option>
      <option value='Test page'>Test page</option>
      <option value='Nonsense'>Nonsense</option>
      <option value="Out of project scope">Out of project scope</option>
      <option value="Not written in this project's language">Not written in this project's language</option>
      <option value="Author's request">Author's request</option>
      <option value="Empty page">Empty page</option>
      </optgroup>`;
    var reasons_protect = `<option value=''>${$.i18n('ajxATdialog-reason-pls')}</option>
      <optgroup label='${$.i18n('ajxATdialog-reason-gs')}'>
      <option value='Persistent vandalism'>Persistent vandalism</option>
      <option value='Persistent spamming'>Persistent spamming</option>
      <option value='Edit warring or other content dispute'>Edit warring or other content dispute</option>
      </optgroup>`;
    var dialog_content = `<div id='ajxATDialog' dir="ltr">
      <table style='width: 100%;'>
      <tr><td><span>${$.i18n( 'ajxATdialog-gswiki' )}</span></td><td><span id='ajxATdialog-gswiki'>${$.i18n( 'ajxATdialog-gswiki-progress' )}</td></tr>
      <tr><td><label for='ajxATdialog-target-user'>${$.i18n( 'ajxATdialog-target-user' )} </label></td>
        <td><input type='text' style='width: 90%;' id='ajxATdialog-target-user' class='ajxATdialog-input' ${(!!AjxAT.DefaultTargetUser ? 'value="' + AjxAT.DefaultTargetUser + '"':'')} /></td></tr>
      <tr><td><label for='ajxATdialog-target-page'>${$.i18n( 'ajxATdialog-target-page' )} </label></td>
        <td><input type='text' style='width: 90%;' id='ajxATdialog-target-page' class='ajxATdialog-input' ${(!!AjxAT.DefaultTargetPage ? 'value="' + AjxAT.DefaultTargetPage + '"':'')} /></td></tr>
      <tr><td><label for='ajxATdialog-suffix'>${$.i18n( 'ajxATdialog-suffix' )}</label></td><td><select id='ajxATdialog-suffix' class='ajxATdialog-input'><option value=''>${$.i18n( 'ajxATdialog-suffix-pls' )}</option><option value='${AjxAT.Suffix_GS}'>${$.i18n( 'ajxATdialog-suffix-gs' )}</option></select></td></tr>
      <tr><td><label for='ajxATdialog-mode'>${$.i18n( 'ajxATdialog-mode' )}</label></td><td><select id='ajxATdialog-mode' class='ajxATdialog-input'><option value='block'>${$.i18n( 'ajxATdialog-opt-block' )}</option><option value='delete'>${$.i18n( 'ajxATdialog-opt-delete' )}</option><option value='protect'>${$.i18n( 'ajxATdialog-opt-protect' )}</option></select></td></tr>
      </table>
    <div id='ajxATdialog-modefield'></div></div>`;
    var content_block = `<div id='ajxATdialog-block' style='display:none;'>
      <div style="text-align:center;"><span style="font-weight: bold;">${$.i18n( 'ajxATdialog-block-caption' )}</span></div>
      <table style='width: 100%;'>
      <tr><td nowrap><label for='ajxATdialog-block-opt-account'>${$.i18n( 'ajxATdialog-block-opt-account' )}</label></td><td><input type='checkbox' id='ajxATdialog-block-opt-account' name='ajxATdialog-block-opt-account' class='ajxATdialog-input' checked /></td></tr>
      <tr><td nowrap><label for='ajxATdialog-block-opt-email'>${$.i18n( 'ajxATdialog-block-opt-email' )}</label></td><td><input type='checkbox' id='ajxATdialog-block-opt-email' name='ajxATdialog-block-opt-email' class='ajxATdialog-input' /></td></tr>
      <tr><td nowrap><label for='ajxATdialog-block-opt-talk'>${$.i18n( 'ajxATdialog-block-opt-talk' )}</label></td><td><input type='checkbox' id='ajxATdialog-block-opt-talk' name='ajxATdialog-block-opt-talk' class='ajxATdialog-input' /></td></tr>
      <tr><td nowrap><label for='ajxATdialog-block-opt-auto'>${$.i18n( 'ajxATdialog-block-opt-auto' ) }</label></td><td><input type='checkbox' id='ajxATdialog-block-opt-auto' name='ajxATdialog-block-opt-auto' class='ajxATdialog-input' checked /></td></tr>
      <tr><td nowrap><label for='ajxATdialog-block-opt-hard'>${$.i18n( 'ajxATdialog-block-opt-hard' )}</label></td><td><input type='checkbox' id='ajxATdialog-block-opt-hard' name='ajxATdialog-block-opt-hard' class='ajxATdialog-input' /></td></tr>
      <tr><td nowrap><label for='ajxATdialog-block-revdeluser'>${$.i18n( 'ajxATdialog-block-revdeluser' ) + '(beta)'}</label></td><td><input type='checkbox' id='ajxATdialog-block-revdeluser' name='ajxATdialog-block-revdeluser' class='ajxATdialog-input' /></td></tr>
      <tr id='ajxATdialog-block-revdeluser-reasonfield' style='display:none;'><td nowrap><label for='ajxATdialog-block-revdeluser-reason'>${$.i18n( 'ajxATdialog-block-revdeluser-reason' )}</label></td><td><select id='ajxATdialog-block-revdeluser-reason' name='ajxATdialog-block-revdeluser-reason' class='ajxATdialog-input'>${reasons_revdel}</select><br /><input type='text' id='ajxATdialog-block-revdeluser-reason-other' name='ajxATdialog-block-revdeluser-reason-other' class='ajxATdialog-input' /></td></tr>
      <tr><td nowrap><label for='ajxATdialog-block-expiration'>${$.i18n( 'ajxATdialog-expiration' )}</label></td><td><select id='ajxATdialog-block-expiration' name='ajxATdialog-block-expiration' class='ajxATdialog-input'>${options_block}</select><input type='text' id='ajxATdialog-block-expiration-other' name='ajxATdialog-block-expiration-other' class='ajxATdialog-input' /></td></tr>
      <tr><td nowrap><label for='ajxATdialog-block-reason'>${$.i18n( 'ajxATdialog-reason' )}</label></td><td><select id='ajxATdialog-block-reason' name='ajxATdialog-block-reason' class='ajxATdialog-input'>${reasons_block}</select><br /><input type='text' id='ajxATdialog-block-reason-other' style='width:80%;' class='ajxATdialog-input' /></td></tr>
    </div>`;
    var content_delete = `<div id='ajxATdialog-delete' style='display:none;'>
      <div style="text-align:center;"><span style="font-weight: bold;">${$.i18n( 'ajxATdialog-delete-caption' )}</span></div>
      <table style='width: 100%;'>
      <tr><td nowrap><label for='ajxATdialog-delete-reason'>${$.i18n( 'ajxATdialog-reason' )}</label></td><td><select id='ajxATdialog-delete-reason' name='ajxATdialog-delete-reason' class='ajxATdialog-input'>${reasons_delete}</select><br /><input type='text' id='ajxATdialog-delete-reason-other' style='width:80%;' class='ajxATdialog-input' /></td></tr>
    </div>`;
    var content_protect = `<div id='ajxATdialog-protect' style='display:none;'>
      <div style="text-align:center;"><span style="font-weight: bold;">${$.i18n( 'ajxATdialog-protect-caption' )}</span></div>
      <tr><td><table style='width: 100%;' border=1 frame="box"rules="none"><tr><td nowrap><label for='ajxATdialog-protect-restr-edit'>${$.i18n( 'ajxATdialog-protect-restr-edit' )}</label></td><td><select id='ajxATdialog-protect-restr-edit' name='edit' class='ajxATdialog-input ajxATdialog-input-protect'><option value='all'>${$.i18n( 'ajxATdialog-protect-level-all' )}</option><option value='autoconfirmed'>${$.i18n( 'ajxATdialog-protect-level-autoconfirmed' )}</option><option value='sysop'>${$.i18n( 'ajxATdialog-protect-level-sysop' )}</option></select></td></tr>
      <tr><td nowrap><label for='ajxATdialog-protect-expiration-edit'>${$.i18n( 'ajxATdialog-expiration' )}</label></td><td><select id='ajxATdialog-protect-expiration-edit' name='edit' class='ajxATdialog-input ajxATdialog-input-protect'>${options_protect}</select><input type='text' id='ajxATdialog-protect-expiration-edit-other' name='edit' class='ajxATdialog-input ajxATdialog-input-protect' /></td></tr></table>
      <table style='width: 100%;' border=1 frame="box"rules="none"><tr><td nowrap><label for='ajxATdialog-protect-restr-move'>${$.i18n( 'ajxATdialog-protect-restr-move' )}</label></td><td><select id='ajxATdialog-protect-restr-move' class='ajxATdialog-input ajxATdialog-input-protect'><option value='all'>${$.i18n( 'ajxATdialog-protect-level-all' )}</option><option value='autoconfirmed'>${$.i18n( 'ajxATdialog-protect-level-autoconfirmed' )}</option><option value='sysop'>${$.i18n( 'ajxATdialog-protect-level-sysop' )}</option></select></td></tr>
      <tr><td nowrap><label for='ajxATdialog-protect-expiration-move'>${$.i18n( 'ajxATdialog-expiration' )}</label></td><td><select id='ajxATdialog-protect-expiration-move' name='move' class='ajxATdialog-input ajxATdialog-input-protect'>${options_protect}</select><input type='text' id='ajxATdialog-protect-expiration-move-other' name='move' class='ajxATdialog-input ajxATdialog-input-protect' /></td></tr></table>
      <table style='width: 100%;' border=1 frame="box"rules="none"><tr><td nowrap><label for='ajxATdialog-protect-restr-create'>${$.i18n( 'ajxATdialog-protect-restr-create' )}</label></td><td><select id='ajxATdialog-protect-restr-create' name='create' name='move' class='ajxATdialog-input ajxATdialog-input-protect'><option value='all'>${$.i18n( 'ajxATdialog-protect-level-all' )}</option><option value='autoconfirmed'>${$.i18n( 'ajxATdialog-protect-level-autoconfirmed' )}</option><option value='sysop'>${$.i18n( 'ajxATdialog-protect-level-sysop' )}</option></select></td></tr>
      <tr><td nowrap><label for='ajxATdialog-protect-expiration-create'>${$.i18n( 'ajxATdialog-expiration' )}</label></td><td><select id='ajxATdialog-protect-expiration-create' name='create' class='ajxATdialog-input ajxATdialog-input-protect'>${options_protect}</select><input type='text' id='ajxATdialog-protect-expiration-create-other' name='create' class='ajxATdialog-input ajxATdialog-input-protect' /></td></tr></table>
      <table style='width: 100%;'>
      <tr><td nowrap><label for='ajxATdialog-protect-reason'>${$.i18n( 'ajxATdialog-reason' )}</label></td><td><select id='ajxATdialog-protect-reason' name='ajxATdialog-protect-reason' class='ajxATdialog-input'>${reasons_protect}</select><br /><input type='text' id='ajxATdialog-protect-reason-other' style='width:80%;' class='ajxATdialog-input' /></td></tr>
    </div>`;

    $( document.body ).append(dialog_content);
    $( '#ajxATdialog-modefield' ).append(content_block);
    $( '#ajxATdialog-modefield' ).append(content_delete);
    $( '#ajxATdialog-modefield' ).append(content_protect);
    $( '#ajxATdialog-mode' ).val(AjxAT.DefaultMode);

    $( '#ajxATDialog' ).dialog({
      autoOpen: false,
      width: 700,
      buttons: [
        {
          text: $.i18n( 'ajxATdialog-cancel' ),
          click: function() {
            $( this ).dialog( "close" );
          }
        },
        {
          text: $.i18n( 'ajxATdialog-execute' ),
          click: function() {
            execute();
          }
        }
      ],
      title: $.i18n( 'ajxATdialog-title' )
    });

    /* タブ追加 */
    var portletLink = mw.util.addPortletLink ( 'p-cactions', '#', $.i18n( 'ajxAT-portlet-link' ), 'ca-adminTools', $.i18n( 'ajxAT-portlet-detail' ));
    $( portletLink ).click( function ( e ) {
      e.preventDefault();
			$( '#ajxATDialog' ).dialog( 'open' );
      if (!$(".ajxATdialog-localDropdown").length) {
        localReasons();
        wikisets();
        changeMode();
      }
		} );

    /* モード変更 */
    $( '#ajxATdialog-mode' ).change(function(){
      changeMode();
    });
    function changeMode(){
      var mode = $( '#ajxATdialog-mode' ).val();
      AjxAT.Mode = mode;
      switch (mode) {
        case 'block':
          $('#ajxATdialog-target-user').prop("disabled", false);
          $('#ajxATdialog-target-page').prop("disabled", true);
          $('#ajxATdialog-block').removeAttr('style');
          $('#ajxATdialog-delete').attr('style', 'display:none;');
          $('#ajxATdialog-protect').attr('style', 'display:none;');
          setBlockOpt();
          break;

        case 'delete':
          $('#ajxATdialog-target-user').prop("disabled", true);
          $('#ajxATdialog-target-page').prop("disabled", false);
          $('#ajxATdialog-delete').removeAttr('style');
          $('#ajxATdialog-block').attr('style', 'display:none;');
          $('#ajxATdialog-protect').attr('style', 'display:none;');
          break;

        case 'protect':
          $('#ajxATdialog-target-user').prop("disabled", true);
          $('#ajxATdialog-target-page').prop("disabled", false);
          $('#ajxATdialog-protect').removeAttr('style');
          $('#ajxATdialog-block').attr('style', 'display:none;');
          $('#ajxATdialog-delete').attr('style', 'display:none;');
          setProtectOpt();
          break;
        default:
        return;
      }
    }

    /* ローカルの理由取得 */
    function localReasons() {
      AjxAT.Api.get({
        "action": "query",
	      "format": "json",
	      "prop": "revisions",
	      "titles": "MediaWiki:Ipbreason-dropdown|MediaWiki:Protect-dropdown|MediaWiki:Deletereason-dropdown|MediaWiki:Revdelete-reason-dropdown",
	      "formatversion": "2",
	      "rvprop": "content",
	      "rvslots": "main"
      }).done( function ( data ) {
        var pages = data.query.pages,
          p;
        AjxAT.LclRsn = {};
	      for ( p in pages ) {
          if ('missing' in pages[p]) {
            continue;
          }
          switch (pages[p].title ) {
            case 'MediaWiki:Ipbreason-dropdown':
              AjxAT.LclRsn.block = parseReasons(pages[p].revisions[0].slots.main.content);
              $( '#ajxATdialog-block-reason' ).append(AjxAT.LclRsn.block);
              break;
            case 'MediaWiki:Protect-dropdown':
              AjxAT.LclRsn.protect = parseReasons(pages[p].revisions[0].slots.main.content);
              $( '#ajxATdialog-protect-reason' ).append(AjxAT.LclRsn.protect);
              break;
            case 'MediaWiki:Deletereason-dropdown':
              AjxAT.LclRsn.delete = parseReasons(pages[p].revisions[0].slots.main.content);
              $( '#ajxATdialog-delete-reason' ).append(AjxAT.LclRsn.delete);
              break;
            case 'MediaWiki:Revdelete-reason-dropdown':
              AjxAT.LclRsn.revdel = parseReasons(pages[p].revisions[0].slots.main.content);
              $( '#ajxATdialog-block-revdeluser-reason' ).append(AjxAT.LclRsn.revdel);
              break;
            default:
              break;
          }
        }
      } );
    }
    function parseReasons(reasons){
      var dropdown = reasons.replace(/^[^\\*]*/gm, "");
      dropdown = dropdown.replace(/^\*\*\s*([^\*]*)/gm, "<option value='$1'>$1</option>\n");
      dropdown = dropdown.replace(/^\*\s*([^<]+)([^\*]*)/gm, "<optgroup class='ajxATdialog-localDropdown' label='$1'>$2</optgroup>");
      return dropdown;
    }

    /* GSウィキかどうか */
    function wikisets(){
      if (AjxAT.LocalSyaop) {
        $('#ajxATdialog-gswiki').text($.i18n( 'ajxATdialog-gswiki-local' ));
        $( '#ajxATdialog-suffix' ).val('');
      } else {
        AjxAT.Api.get({
          "action": "query",
          "format": "json",
          "list": "wikisets",
          "formatversion": "2",
          "wsfrom": "Opted-out of global sysop wikis",
          "wsprop": "wikisnotincluded",
          "wslimit": "1"
        }).done(function(data) {
          if (data.query.wikisets[0].id != 7) {
            console.error('Failed to retrieve the wikiset.');
            return;
          }
          var wikis = data.query.wikisets[0].wikisnotincluded;
          wikis = Object.values(wikis);
          if (wikis.includes(mw.config.get('wgDBname'))) {
            $('#ajxATdialog-gswiki').text($.i18n( 'ajxATdialog-gswiki-no' ));
          } else {
            $('#ajxATdialog-gswiki').text($.i18n( 'ajxATdialog-gswiki-yes' ));
            $( '#ajxATdialog-suffix' ).val(AjxAT.Suffix_GS);
          }
        });
      }
    }

    /* IP/アカウント判定 */
    $( '#ajxATdialog-target-user' ).change(function(){
      setBlockOpt();
    });
    function setBlockOpt() {
      var target = $( '#ajxATdialog-target-user' ).val();
      var short_target = target.replace(/\/\d{1,2}$/, '');
      if (
        mw.util.isIPv4Address( target ) || mw.util.isIPv6Address( target ) ||
        mw.util.isIPv4Address( short_target ) || mw.util.isIPv6Address( short_target )
      ) {
        $("#ajxATdialog-block-opt-auto").prop("disabled", true);
        $("#ajxATdialog-block-opt-auto").prop("checked", false);
        $("#ajxATdialog-block-opt-hard").prop("disabled", false);
        $("#ajxATdialog-block-opt-hard").prop("checked", false);
      } else {
        $("#ajxATdialog-block-opt-auto").prop("disabled", false);
        $("#ajxATdialog-block-opt-auto").prop("checked", true);
        $("#ajxATdialog-block-opt-hard").prop("disabled", true);
        $("#ajxATdialog-block-opt-hard").prop("checked", false);
      }
    }

    /* revdeluserの理由表示処理 */
    $('#ajxATdialog-block-revdeluser').change(function(){
      if ($("#ajxATdialog-block-revdeluser").prop("checked")) {
        $('#ajxATdialog-block-revdeluser-reasonfield').removeAttr('style');
      } else {
        $('#ajxATdialog-block-revdeluser-reasonfield').attr('style', 'display:none;');
      }
    });

    /* 保護オプション設定 */
    $( '#ajxATdialog-target-page' ).change(function(){
      setProtectOpt();
    });
    function setProtectOpt(){
      var target = $( '#ajxATdialog-target-page' ).val();
      AjxAT.Api.get({
      	"action": "query",
      	"format": "json",
      	"prop": "info",
      	"titles": target,
      	"formatversion": "2",
      	"inprop": "protection"
      }).done(function (data) {
        var cur = data.query.pages[0].protection;
        var types = data.query.pages[0].restrictiontypes;
        if (cur.length == 0) {}
        types = types.filter((action) => ['edit', 'move', 'create'].includes(action));
        AjxAT.Restr = types;
        $('.ajxATdialog-input-protect').each((i, o) => {
          $(o).prop("disabled", true);
        });

        types.forEach((u) => {
          $("#ajxATdialog-protect-restr-" + u).prop("disabled", false);
          $("#ajxATdialog-protect-expiration-" + u).prop("disabled", false);
          $("#ajxATdialog-protect-expiration-" + u + "-other").prop("disabled", false);
        });

      });
    }

    /* 実行処理 */
    function execute() {
      var action = $( '#ajxATdialog-mode' ).val();
      $( '#ajxATdialog-msg' ).remove();
      input_disability(true);
      switch (action) {
        case 'block':
          execute_block();
          break;
        case 'delete':
          execute_delete();
          break;
        case 'protect':
          execute_protect();
          break;
        default:
          return;
      }
    }

    /* 入力可能性操作 */
    function input_disability(isSet) {
      $(".ajxATdialog-input").each((i,o) => {
        $(o).prop("disabled", isSet);
      });
      if (!isSet) {
        setBlockOpt();
        setProtectOpt();
      }
    }

    /* メッセージ表示 */
    function showmsg(content, err, id) {
      var isErr;
      if (typeof err !== 'undefined') {
        isErr = err;
      } else {
        isErr = false;
      }
      var new_msg = `<span style="color: ${isErr?'red':'blue'};">${content}</span>`;
      if (typeof id !== 'undefined') {
        id = "#ajxATdialog-status-" + id;
        new_msg = `<div id=${id}>${new_msg}</div>`;
        if ($(id).length) {
          $(id).html(new_msg);
          return;
        }
      } else {
        new_msg = `<div>${new_msg}</div>`;
      }
      if ($("#ajxATdialog-msg").length) {
        $( '#ajxATdialog-msg' ).append(new_msg);
      } else {
        $( '#ajxATDialog' ).append(`<div id="ajxATdialog-msg" style="text-align:center;"><hr>
          ${new_msg}
          </div>`);
      }
    }

    function showApiErr(params, data, id) {
      if ('token'in params) {
        params.token = '[redacted]';
      }
      showmsg('Error occurred. Error code: ' + data + '. ', true, id);
      console.error('Error code: ' + data + '.' + ' Params:');
      console.log(params);
    }

    /* ブロック実行 */
    function execute_block() {
      showmsg($.i18n('ajxATdialog-execute-block'),false,'block');
      var expiry;
      if ($( '#ajxATdialog-block-expiration' ).val() == 'other' && $('#ajxATdialog-block-expiration-other').val() == '') {
        showmsg($.i18n( 'ajxATdialog-err-block-expiry-other' ), true,'block');
        input_disability(false);
        return;
      }
      if ($( '#ajxATdialog-block-reason' ).val() == '' && $('#ajxATdialog-block-reason-other').val() == '') {
        showmsg($.i18n( 'ajxATdialog-err-block-reason-other' ), true,'block');
        input_disability(false);
        return;
      }
      if ($("#ajxATdialog-block-revdeluser").prop("checked") && $( '#ajxATdialog-block-revdeluser-reason' ).val() == '' && $('#ajxATdialog-block-revdeluser-reason-other').val() == '') {
        showmsg($.i18n( 'ajxATdialog-err-block-revdeluser-reason-other' ), true,'block');
        input_disability(false);
        return;
      }
      var reason = $( '#ajxATdialog-block-reason' ).val();
      if ($( '#ajxATdialog-block-reason' ).val() && $( '#ajxATdialog-block-reason-other' ).val()) reason += ': ';
      reason += $( '#ajxATdialog-block-reason-other' ).val() + $('#ajxATdialog-suffix').val();
      var params = {
        action: "block",
        user:$( '#ajxATdialog-target-user' ).val(),
        expiry:(($( '#ajxATdialog-block-expiration' ).val() == 'other') ? $('#ajxATdialog-block-expiration-other').val() : $( '#ajxATdialog-block-expiration' ).val()),
        reason:reason,
        format: 'json',
        formatversion: "2"
      };
      if ($('#ajxATdialog-block-opt-account').prop('checked')) params.nocreate = 1;
      if ($('#ajxATdialog-block-opt-email').prop('checked')) params.noemail = 1;
      if (!$('#ajxATdialog-block-opt-talk').prop('checked')) params.allowusertalk = 1;
      if ($('#ajxATdialog-block-opt-auto').prop('checked')) params.autoblock = 1;
      if (!$('#ajxATdialog-block-opt-hard').prop('checked')) params.anononly = 1;
      AjxAT.Api.postWithToken( 'csrf', params ).done( function ( data ) {
        showmsg($.i18n( 'ajxATdialog-success-block' ), false);
        if ($("#ajxATdialog-block-revdeluser").prop("checked")) rmUserName();
        input_disability(false);
      } ).fail( function ( data ) {
        showApiErr(params, data, 'block');
        input_disability(false);
        return;
      });
    }

    function rmUserName(){
      var user = $('#ajxATdialog-target-user').val(),
        params1 = {
        	action: "query",
        	format: "json",
        	list: "allrevisions|logevents",
        	formatversion: "2",
        	arvprop: "ids",
        	arvlimit: "50",
        	arvuser: user,
        	leprop: "ids",
        	leuser: user,
        	lelimit: "50"
        },
        params2 = {
        	action: "query",
        	format: "json",
        	list: "logevents",
        	formatversion: "2",
        	leprop: "ids",
        	letitle: "User:" + user,
        	lelimit: "50"
        };
      var reason = $( '#ajxATdialog-block-revdeluser-reason' ).val();
      if ($( '#ajxATdialog-block-revdeluser-reason' ).val() && $( '#ajxATdialog-block-revdeluser-reason-other' ).val()) reason += ': ';
      reason += $( '#ajxATdialog-block-revdeluser-reason-other' ).val() + $('#ajxATdialog-suffix').val();
      AjxAT.Api.get(params1).done(function(data) {
        if ('continue' in data) {
          showmsg($.i18n('ajxATdialog-err-overflow-1'), true);
          input_disability(false);
          return;
        }
      	var revisions = data.query.allrevisions,
          logs1 = data.query.logevents,
          revids = [],
          logids = [];
        for (var r in revisions) {
          for (var rp in revisions[r].revisions) {
            revids.push(revisions[r].revisions[rp].revid);
          }
        }
      	for (var l in logs1) {
      		logids1.push(data.query.logevents[l].logid);
      	}
        AjxAT.Api.get(params2).done(function(data) {
          if ('continue' in data) {
            showmsg($.i18n('ajxATdialog-err-overflow-2'), true);
            input_disability(false);
            return;
          }
        	var logs2 = data.query.logevents,
            logids2 = [];
        	for (var l in logs2) {
        		logids2.push(data.query.logevents[l].logid);
        	}
          if (revids.length) rmUNfromRevs(revids, reason);
          if (logids1.length) rmUNfromLogs(logids1, reason, 'user', "1");
          if (logids2.length) rmUNfromLogs(logids2, reason, 'content', "2");
        } );
      } );
    }
    function rmUNfromRevs(revids, reason){
      showmsg($.i18n( 'ajxATdialog-execute-block-revdeluser-revs' ), false, 'revdeluser-revs');
      var ids = revids.join('|'),
        params = {
          action: 'revisiondelete',
          type: 'revision',
          ids: ids,
          format: 'json',
          hide: 'user',
          reason: reason,
      };
      AjxAT.Api.postWithToken('csrf', params).done(function(data) {
        showmsg($.i18n( 'ajxATdialog-success-revdeluser-revs' ), false, 'revdeluser-revs');
        input_disability(false);
      } ).fail(function(data) {
        showApiErr(params, data, 'revdeluser-revs');
        input_disability(false);
        return;
      });
    }
    function rmUNfromLogs(logids, reason, hidetype, id){
      showmsg($.i18n('ajxATdialog-execute-block-revdeluser-logs-' + id), false, 'revdeluser-log-' + id);
      var ids = logids.join('|'),
        params = {
          action: 'revisiondelete',
          type: 'logging',
          ids: ids,
          format: 'json',
          hide: hidetype,
          reason: reason,
      };
      AjxAT.Api.postWithToken('csrf', params).done(function(data) {
        showmsg($.i18n('ajxATdialog-success-revdeluser-logs-' + id), false, 'revdeluser-log-' + id);
        input_disability(false);
      } ).fail(function(data) {
        showApiErr(params, data, 'revdeluser-log-' + id);
        input_disability(false);
        return;
      });
    }

    /* 削除実行 */
    function execute_delete() {
      showmsg($.i18n('ajxATdialog-execute-delete'), false, 'delete');
      if ($( '#ajxATdialog-delete-reason' ).val() == '' && $('#ajxATdialog-delete-reason-other').val() == '') {
        showmsg($.i18n( 'ajxATdialog-err-delete-reason-other' ), true);
        input_disability(false);
        return;
      }
      var reason = $( '#ajxATdialog-delete-reason' ).val();
      if ($( '#ajxATdialog-delete-reason' ).val() && $( '#ajxATdialog-delete-reason-other' ).val()) reason += ': ';
      reason += $( '#ajxATdialog-delete-reason-other' ).val() + $('#ajxATdialog-suffix').val();
      var params = {
        action: 'delete',
        title: $( '#ajxATdialog-target-page' ).val(),
        reason: reason,
        format: 'json',
        formatversion: "2"
      };
      AjxAT.Api.postWithToken( 'csrf', params ).done( function ( data ) {
        showmsg($.i18n( 'ajxATdialog-success-delete' ), false);
        input_disability(false);
      } ).fail( function ( data ) {
        showApiErr(params, data, 'delete');
        input_disability(false);
        return;
      });
    }

    /* 保護実行 */
    function execute_protect() {
      showmsg($.i18n('ajxATdialog-execute-protect'), false, 'protect');
      if ($( '#ajxATdialog-protect-reason' ).val() == '' && $('#ajxATdialog-protect-reason-other').val() == '') {
        showmsg($.i18n( 'ajxATdialog-err-protect-reason-other' ), true);
        input_disability(false);
        return;
      }
      var expiry = [],
        protections = [];

      AjxAT.Restr.forEach((item, i) => {
        protections.push(item + '=' + $( '#ajxATdialog-protect-restr-' + item ).val());
        expiry.push(($( '#ajxATdialog-protect-expiration-' + item ).val() != 'other')? $( '#ajxATdialog-protect-expiration-' + item ).val(): $( '#ajxATdialog-protect-expiration-' + item + '-other' ).val() );
      });
      var reason = $( '#ajxATdialog-protect-reason' ).val();
      if ($( '#ajxATdialog-protect-reason' ).val() && $( '#ajxATdialog-protect-reason-other' ).val()) reason += ': ';
      reason += $( '#ajxATdialog-protect-reason-other' ).val() + $('#ajxATdialog-suffix').val();
      var params = {
        action: 'protect',
        title: $( '#ajxATdialog-target-page' ).val(),
        protections: protections.join('|'),
        expiry: expiry.join('|'),
        reason: reason,
        format: 'json',
        formatversion: "2"
      };
      AjxAT.Api.postWithToken( 'csrf', params ).done( function ( data ) {
        showmsg($.i18n( 'ajxATdialog-success-protect' ), false);
        input_disability(false);
      } ).fail( function ( data ) {
        showApiErr(params, data, 'protect');
        input_disability(false);
        return;
      });
    }
  } );
});
// </nowiki>
