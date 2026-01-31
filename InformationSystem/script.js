$(document).on('click','#btndelete', function(e)
{
    e.preventDefault();
    if (confirm("Are you sure to delete this item?"))
    {
        console.log("Sakses");
    }
})