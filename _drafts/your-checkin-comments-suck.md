Recently I was working on a bug for a feature that was previously working. As I tracked down the offending line of code I did a diff to see what and when the line of code changed. Once I tracked down the changeset I looked at the comments to try and figure out what why this change was made. To my chagrin all I found was "bug fixes"....**doh!** Obviously this comment wasn't very helpful for a couple of reasons. 

* you mean you worked on several things at once?!?!
* which bugs? and most importantly
* what did you do and why

My next train of thought was to track down the lazy ass who couldn't take the time to string more than two words together for a check-in comment and then chastise them. There was only one problem, the user associated with the changset was me **#sadtrombone**.

This got me thinking, what the heck are check-in comments good for if you don't use them? They are sort of like an insurance policy, you don't really want them but when you need them you are glad you have them.

So how can we improve them so that our butts are covered when we do need them? Based on the example given the first big win is to ensure you are only working on **ONE** thing at a time. You are doing too much if you are working on several things this will lead to mistakes. Also, make sure to describe what is being changed and why it is being changed. If there is a specific bug you are working on make sure to reference it in some manner. Here are some examples below:

> Fix 1234: Modified CSS so that text box is highlighted red when there is an error.

> Added controller action to deal with post from view xyz.

> Added javascript library to deal with this fancy UI thing we need done.

So I challenge you, the next time you are tempted to write "Bug Fixes" (or something similarly crappy) as your check-in comment, stop yourself and put some thought into what you actually did. You will thank me later.

