# Address Controller

Consider the following view, provided here and below, which is placed in Views/Address/Create.cshtml:

```ASP.NET
@model Address

<!DOCTYPE html>
<html>
<head>
  <title>Create a new address</title>
</head>
<body>
  <form method="post" action="/user/address/save">
    <label asp-for="Street">Street:</label>
    <input type="text" asp-for="Street" />
    <label asp-for="City">City:</label>
    <input type="text" asp-for="City" />
    <input type="submit" value="Submit" />
  </form>
</body>
</html>
```
Add actions to the _AddressController_ so that:
* On requests to "user/address/create", the view above should be returned.
* On submitting the form from the view above, AddressController should add the Address that was submitted into the AddressController.addresses field and then redirect to the "user/address/create" URL.

Actions should use attribute routing.

#### Original
```C#
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

public class AddressController : Controller
{
    public static List<Address> addresses = new List<Address>();
}

public class Address
{
	public string Street { get; set; }

	public string City { get; set; }
}
```
#### Answer
```C#
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

public class AddressController : Controller
{
    public static List<Address> addresses = new List<Address>();
    
    [Route("user/address/create")]
    public ViewResult Create() 
    {
      return View();
    }    
    
    [Route("user/address/save")]
    public ActionResult Save(string Street, string City) 
    {
      Address newAddress = new Address();
      newAddress.Street = Street;
      newAddress.City = City;
      addresses.Add(newAddress);
      return RedirectToAction("Create");
    }
}

public class Address
{
	public string Street { get; set; }

	public string City { get; set; }
}
```
