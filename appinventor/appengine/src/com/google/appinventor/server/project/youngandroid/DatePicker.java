package com.google.appinventor.server.project.youngandroid;

import java.util.Iterator;

import org.json.JSONObject;

public class DatePicker {

	String backgroundColor="#FFFFFF";
	String fontSize="14";
	String fontBold="none";
	String fontItalic="none";
	String enabled="true";
	String fontTypeface="sans-serif";
	String shape="0px";
	String text="";
	String textAlign="left";
	String textColor="#000000";
	String visible="true";
	String width="auto";
	String height="auto";	

	String name="";
	String type="DatePicker";
	public String getBackgroundColor() {
		return backgroundColor;
	}
	public void setBackgroundColor(String backgroundColor) {
		this.backgroundColor = backgroundColor;
	}
	public String getFontSize() {
		return fontSize;
	}
	public void setFontSize(String fontSize) {
		this.fontSize = fontSize;
	}
	public String getFontBold() {
		return fontBold;
	}
	public void setFontBold(String fontBold) {
		this.fontBold = fontBold;
	}
	public String getFontItalic() {
		return fontItalic;
	}
	public void setFontItalic(String fontItalic) {
		this.fontItalic = fontItalic;
	}
	public String getEnabled() {
		return enabled;
	}
	public void setEnabled(String enabled) {
		this.enabled = enabled;
	}
	public String getFontTypeface() {
		return fontTypeface;
	}
	public void setFontTypeface(String fontTypeface) {
		this.fontTypeface = fontTypeface;
	}
	public String getShape() {
		return shape;
	}
	public void setShape(String shape) {
		this.shape = shape;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public String getTextAlign() {
		return textAlign;
	}
	public void setTextAlign(String textAlign) {
		this.textAlign = textAlign;
	}
	public String getTextColor() {
		return textColor;
	}
	public void setTextColor(String textColor) {
		this.textColor = textColor;
	}
	public String getVisible() {
		return visible;
	}
	public void setVisible(String visible) {
		this.visible = visible;
	}
	public String getWidth() {
		return width;
	}
	public void setWidth(String width) {
		this.width = width;
	}
	public String getHeight() {
		return height;
	}
	public void setHeight(String height) {
		this.height = height;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	
	private String generateCSSforComponent()
	  {
		 StringBuilder sb=new StringBuilder();
		 sb.append("#"+"label"+this.getName()+"\n");
		 sb.append("{\n");
		
		
		sb.append(" background : "+this.getBackgroundColor()+";\n");
		sb.append(" text-align : "+this.getTextAlign()+";\n");
		sb.append(" font-weight : "+this.getFontBold()+";\n");
		sb.append(" font-style : "+this.getFontItalic()+";\n");
		sb.append(" font-family : "+this.getFontTypeface()+";\n");
		sb.append(" font-size : "+this.getFontSize()+"px;\n");
		sb.append(" color : "+this.getTextColor()+";\n");
		sb.append(" width : "+this.getWidth()+";\n");
		sb.append(" height : "+this.getHeight()+";\n");
		sb.append(" border-radius : "+this.getShape()+";\n");
		 
		 sb.append("}\n");
		 
		// System.out.println(sb.toString().valueOf(sb));
		 
		 return sb.toString().valueOf(sb);
	  }
	  
	  private String generateHTMLforComponent()
	  {
		 StringBuilder sb=new StringBuilder();
		 
		 sb.append("<label");
		 sb.append(" id="+"\""+"label"+this.getName()+"\"");
		sb.append(">");
		 sb.append(this.getText());
		 sb.append("</label> ");
		 sb.append(" <input");
		 sb.append(" id="+"\""+this.getName()+"\"");
		 sb.append(" type="+"\""+"date"+"\"");
		 
		 if(this.getEnabled().equals("False"))
			 sb.append(" disabled");
		
		 if(this.getVisible().equals("False"))
			 sb.append(" hidden");
		 
		 sb.append("/>");
		  
		 //System.out.println("HTML equivalent for button: "+sb.toString().valueOf(sb));
		return sb.toString().valueOf(sb);
	  }

	public String[] getConvertedDatePickerString(JSONObject component)
	{
		String htmlCssString[]=new String[2];
		
		 Iterator<String> itr=component.keys();
		
		 try
		 {
		      while(itr.hasNext())
		      {
		    	  String str=itr.next();
		    	  
		    	  
		    	  if(str.equals("BackgroundColor"))
		    	  {
			    	 	StringBuilder color=new StringBuilder(component.getString(str));
			    	 	color.replace(0, 4, "#");			    	 		
			    	 	this.setBackgroundColor(color.toString().valueOf(color));
		    	  }
		    	  else if(str.equals("FontSize"))
		    		  this.setFontSize(component.getString(str));
		    	  else if(str.equals("FontBold"))
		    	  {
		    		  if(component.getString("FontBold").equalsIgnoreCase("True"))
		    			  this.setFontBold("bold");
		    	  }
		    		  
		    	  else if(str.equals("FontItalic"))
		    	  {
			    		  if(component.getString("FontItalic").equalsIgnoreCase("True"))
			    			  this.setFontItalic("italic");
		    	  }
		    	  else if(str.equals("FontTypeface"))
		    	  {
		    		  if(component.getString("FontTypeface").equals("0")||component.getString("FontTypeface").equals("1"))
		    			  this.setFontTypeface("sans-serif");
		    		  else if(component.getString("FontTypeface").equals("2"))
		    			  this.setFontTypeface("serif");
		    		  else 
		    			  this.setFontTypeface("monospace");
		    	  }
		    	  else if(str.equals("Shape"))
		    	  {
		    		  if(component.getString("Shape").equals("1"))
		    			  this.setShape("10px");
		    		  else if(component.getString("Shape").equals("2")||component.getString("Shape").equals("0"))
		    			  this.setShape("0px");
		    		  else 
		    			  this.setShape("50%/50%");
		    	  }
		    	  else if(str.equals("$Name"))
			    	  this.setName(component.getString(str));		 
		    	  else if(str.equals("Text"))
			    	  this.setText(component.getString(str));
		    	  else if(str.equals("TextAlignment"))
		    	  {
		    		  if(component.getString("TexAlignment").equals("0"))
		    			  this.setTextAlign("left");  
		    		  if(component.getString("TexAlignment").equals("1"))
		    			  this.setTextAlign("center");
		    		  if(component.getString("TexAlignment").equals("2"))
		    			  this.setTextAlign("right");  
		    	  }
		    	  else if(str.equals("$Type"))
			    	  this.setType(component.getString(str));		 
		    	  else if(str.equals("TextColor"))
		    	  {
			    	 	StringBuilder color=new StringBuilder(component.getString(str));
			    	 	color.replace(0, 4, "#");			    	 		
			    	 	this.setTextColor(color.toString().valueOf(color));
		    	  }	 
		    	  else if(str.equals("Visible"))
			    	  this.setVisible(component.getString(str));	 
		    	  else if(str.equals("Width"))
		    	  {
		    		  if(component.getString("Width").equalsIgnoreCase("Automatic"))
		    			  this.setWidth("auto");
		    		  else if(component.getString("Width").equalsIgnoreCase("Fill Parent"))
		    			  this.setWidth("100%");
		    		  else
		    		  {
		    			  this.setWidth(component.getString(str)+"px");
		    			  
		    		  }
		    			  
		    	  }
		    	  else if(str.equals("Height"))
		    	  {
		    		  if(component.getString("Height").equalsIgnoreCase("Automatic"))
		    			  this.setHeight("auto");
		    		  else if(component.getString("Height").equalsIgnoreCase("Fill Parent"))
		    			  this.setHeight("100%");
		    		  else
		    			  this.setHeight(component.getString(str)+"px");		    			  
		    			  
		    	  }
		    	  else if(str.equals("Enabled"))
			    	  this.setEnabled(component.getString("Enabled"));		 
		      }

		 }
		 catch(Exception e)
		 {
			 e.printStackTrace();
		 }

	    	  htmlCssString[0]=generateHTMLforComponent();
	    	  htmlCssString[1]=generateCSSforComponent();
	    	  return htmlCssString;
	
	    }
	
	
	
}
