# Alert Service
https://www.testdome.com/questions/c-sharp/alert-service/96005

Refactor the _AlertService_ and _AlertDAO_ classes:

* Create a new interface, named _IAlertDAO_, that contains the same methods as _AlertDAO_.
* _AlertDAO_ should implement the _IAlertDAO_ interface.
* _AlertService_ should have a public constructor that accepts _IAlertDAO_.
* The _RaiseAlert_ and _GetAlertTime_ methods should use the object passed through the constructor.

```C#
using System.Collections.Generic;
using System;

public class AlertService	
{
    private readonly AlertDAO storage = new AlertDAO();
	
    public Guid RaiseAlert()
    {
        return this.storage.AddAlert(DateTime.Now);
    }
	
    public DateTime GetAlertTime(Guid id)
    {
        return this.storage.GetAlert(id);
    }	
}
	
public class AlertDAO
{
    private readonly Dictionary<Guid, DateTime> alerts = new Dictionary<Guid, DateTime>();
	
    public Guid AddAlert(DateTime time)
    {
        Guid id = Guid.NewGuid();
        this.alerts.Add(id, time);
        return id;
    }
	
    public DateTime GetAlert(Guid id)
    {
        return this.alerts[id];
    }	
}
```
