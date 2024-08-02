function PlaySound(strFileName)
{
   var soundfile = eval("document." + strFileName);
   try
   {
      soundfile.Play();
   }
   catch (e)
   {
      soundfile.DoPlay();
   }
}

function SwapImage()
{
   var doc=document, args=arguments;
   doc.$imgSwaps = new Array();
   for(var i=2; i<args.length; i+=2)
   {
      var elem=FindObject(args[i]);
      if(elem)
      {
         doc.$imgSwaps[doc.$imgSwaps.length]=elem;
         elem.$src=elem.src;
         elem.src=args[i+1];
      }
   }
}

function FindObject(id, doc)
{
   var child, elem;
   if(!doc)
      doc=document;
   if(doc.getElementById)
      elem=doc.getElementById(id);
   else
   if(doc.layers)
      child=doc.layers;
   else
   if(doc.all)
      elem=doc.all[id];
   if(elem)
      return elem;
   if(doc.id==id || doc.name==id)
      return doc;
   if(doc.childNodes)
      child=doc.childNodes;
   if(child)
   {
      for(var i=0; i<child.length; i++)
      {
         elem=FindObject(id,child[i]);
         if(elem)
            return elem;
      }
   }
   var frm=doc.forms;
   if(frm)
   {
      for(var i=0; i<frm.length; i++)
      {
         var elems=frm[i].elements;
         for(var j=0; j<elems.length; j++)
         {
            elem=FindObject(id,elems[i]);
            if(elem) return elem;
         }
      }
   }
   return null;
}

function OnGoMenuFormLink(GoList)
{
   var url = GoList.options[GoList.selectedIndex].value;
   var target = GoList.options[GoList.selectedIndex].className;
   GoList.selectedIndex=0;
   GoList.blur();
   if (url)
   {
      NewWin=window.open(url,target);
      window['NewWin'].focus()
   }
}

function popupwnd(url, toolbar, menubar, locationbar, resize, scrollbars, statusbar, left, top, width, height)
{
   var popupwindow = this.open(url, '', 'toolbar=' + toolbar + ',menubar=' + menubar + ',location=' + locationbar + ',scrollbars=' + scrollbars + ',resizable=' + resize + ',status=' + statusbar + ',left=' + left + ',top=' + top + ',width=' + width + ',height=' + height);
}

function ShowObject(id, flag)
{
   var elem=FindObject(id);
   if(elem)
      elem.style.visibility=flag?'visible':'hidden';
}

function MoveObject(id, left, top)
{
   var elem=FindObject(id);
   if(elem)
   {
      elem.style.left=left+'px';
      elem.style.top=top+'px';
   }
}

function SetImage(id, filename)
{
   var elem=FindObject(id);
   if(elem)
   {
      elem.src=filename;
   }
}

function SetStyle(id, className)
{
   var elem=FindObject(id);
   if(elem)
   {
      elem.className=className;
   }
}

function PlayAudio(id)
{
   var elem=FindObject(id);
   if(elem)
   {
      elem.play();
   }
}

function PauseAudio(id)
{
   var elem=FindObject(id);
   if(elem)
   {
      elem.pause();
   }
}

function StopAudio(id)
{
   var elem=FindObject(id);
   if(elem)
   {
      elem.stop();
   }
}

function ToggleExpand(id)
{
   var obj = FindObject(id);
   if (!obj)
   {
      return false;
   }
   if (obj.style.display == "none")
   {
      obj.style.display = "";
   }
   else
   {
      obj.style.display = "none";
   }
   return false;
}

function FadeImage(id, duration)
{
   var millisec = Math.round(duration / 100);
   var timer = 0;
   for(i = 0; i <= 100; i++)
   {
      setTimeout("SetOpacity('" + id + "'," + i + ")",(timer * millisec));
      timer++;
   }
}

function SetOpacity(id, opacity)
{
   var element = document.getElementById(id).style;
   element.opacity = (opacity / 100);
   element.MozOpacity = (opacity / 100);
   element.KhtmlOpacity = (opacity / 100);
   element.filter = "alpha(opacity=" + opacity + ")";
}

function SlideImage(id, duration, direction, width)
{
   var millisec = Math.round(duration / 100);
   var timer = 0;
   if (direction == 0)
   {
      for(i = width; i >= 0; i--)
      {
         setTimeout("SetPosition('" + id + "'," + i + ")",(timer * millisec));
         timer++;
      }
   }
   else
   {
      for(i = -width; i <= 0; i++)
      {
         setTimeout("SetPosition('" + id + "'," + i + ")",(timer * millisec));
         timer++;
      }
   }
}

function SetPosition(id, pos)
{
   var element = document.getElementById(id).style;
   element.left = pos;
}

