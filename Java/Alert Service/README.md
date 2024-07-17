# Alert Service
https://www.testdome.com/questions/java/alert-service/85618

Refactor the _AlertService_ and _MapAlertDAO_ classes:

* Create a new _package-private_ interface, named _AlertDAO_, that contains the same methods as _MapAlertDAO_.
* _MapAlertDAO_ should implmenet the _AlertDAO_ interface.
* _AlertService_ should have a public constructor that accepts _AlertDAO_.
* The _raiseAlert_ and _getAlertTime_ methods should use the object passed through the constructor.

```Java
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

class AlertService {
    private final MapAlertDAO storage = new MapAlertDAO();
		
    public UUID raiseAlert() {
        return this.storage.addAlert(new Date());
    }
	
    public Date getAlertTime(UUID id) {
        return this.storage.getAlert(id);
    }	
}

class MapAlertDAO {
    private final Map<UUID, Date> alerts = new HashMap<UUID, Date>();
	
    public UUID addAlert(Date time) {
    	UUID id = UUID.randomUUID();
        this.alerts.put(id, time);
        return id;
    }
	
    public Date getAlert(UUID id) {
        return this.alerts.get(id);
    }	
}
```
