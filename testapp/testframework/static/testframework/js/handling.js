var Handler = function(){
    return {
         //WORK IN PROGRESS
        load_data : function(url){
            $.ajax({
                type: 'GET',
                url: url,
                error: function(response){

                },
                success: function(response) {
                    console.log(response);
                },
                complete: function() {
                }
            });
        },

        //WORK IN PROGRESS
        send : function(type, url, data, element){
            $.ajax({
                type: type,
                url: url,
                data: data,
                error: function(response){
                    
                },
                success: function(response) {

                },
                complete: function() {
                }
            });

        },
        loadDropdown: function(element, data){//Dynamic Rendering of Dropdown Options
            var renderedList= '';
            for(let value in data){
                renderedList += '<option value="'+data[value]+'">'+ data[value] +'</option>';
            }
            $("#" + element).html("");
            $("#" + element).html(renderedList);
            $('#' + element + ' option:eq(0)').prop('selected', true);        
        },
        showInputError: function(source, message) {
            var container = $(source).closest(".errorTag");
            $(container).find(".comment").remove();
            $(container).append($('<span class="comment text-danger font-small-2">' + message + '</span>'));
            setTimeout(function() { $(container).find(".comment").remove(); }, 4000);
        },
        showRequestError: function(type, message, timeout) {
            $("#notification .alert-" + type).show();
            $("#notification .alert-" + type).html(message);
            if (timeout > 0) {
                setTimeout(function(){ $("#notification .alert-" + type).hide(); }, timeout);
            }
        },
        loadCheckbox: function(element, data){//Dynamic Rendering of Checkboxes
            var checkoptions = '';
            for(let value in data){
                checkoptions += '<label><input name="domain" value="'+data[value]+'" type="checkbox" class="input-checkbox" />'+data[value]+'</label>'
            }
            $("#" + element).html("");
            $("#" + element).html(checkoptions);
        },
        getCheckboxesValue: function(name, allowEmpty){//Provide Name of the Checkboxes
            list = [];
            $("input:checkbox[name="+name+"]:checked").each(function(){
                list.push($(this).val());
            });
            if (list.length == 0 && allowEmpty==false){
                throw {
                    source : $(this),
                    message : "Atleast choose one box!"
                }
            }
            return list;
        },
        getRadioValue:function(name){//Provide Name of the radio buttons
            var data = $('input[name='+name+']:checked').val();
            return data;
        },
        loadRadioButtons : function(element, data){//Dynamic Rendering of Radio Buttons
            var radioOptions = '';
            for(let value in data){
                radioOptions += '<label class="radio-label"><input type="radio" name="courses" class="input-radio"value="'+data[value]+'">'+data[value]+'</label>'
            }
            $("#" + element).html("");
            $("#" + element).html(radioOptions);
        }
    }
}();