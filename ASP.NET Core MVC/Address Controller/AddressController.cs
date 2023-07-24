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
