// Start Hackers Function //
function HackersFunction()
{
    var x = document.getElementById("Hackers");
    if (x.style.display === "none")
    {
        x.style.display = "block";
        document.getElementById("Coders").style.display="none";
        document.getElementById("Servers").style.display="none";
    }
    else
    {
        x.style.display = "none";
    }
}
// End Hackers Function //

// Start Coders Function //
function CodersFunction()
{
  var x = document.getElementById("Coders");
  if (x.style.display == "none")
  {
    x.style.display = "block";
    document.getElementById("Hackers").style.display="none";
    document.getElementById("Servers").style.display="none";
  }
  else
  {
    x.style.display = "none";
  }
}
// End Coders Function //

// Start Servers Function //
function ServersFunction()
{
  var x = document.getElementById("Servers");
  if (x.style.display == "none")
  {
    x.style.display = "block";
    document.getElementById("Hackers").style.display="none";
    document.getElementById("Coders").style.display="none";
  }
  else
  {
    x.style.display = "none";
  }
}
