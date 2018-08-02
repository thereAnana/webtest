            function timeout(workspaceNa) {
                return new Promise((resolve, reject) => {
                // setTimeout(resolve, ms, 'done');
                    $.ajax({
                        url:'/thumbnail&'+workspaceNa,
                        type:'get',
                        dataType:'JSON',
                        success:resolve
                    })
                });
            }    
            function callback(data){
            let my_model = new Date().getTime();//接受时间
            console.log("model:"+(my_model - my_start)+"ms");
            console.log(data)
            imgdataArr.push(data);
            console.log("model1:"+((new Date().getTime()) - my_start)+"ms");
            for(var j=0;j<data.length;j++){

                for(var k=0;k<data[j].length;k++){
                    str1+='<div class="oneBox" data-index="'+j+'_'+k+'">'+
                    '<img src="'+data[j][k].url+'">'+
                    '<span class="imgname" workSpace='+data[j][k].workspace+'>'+data[j][k].name+'</span>'+
                    '<div class="imgstatus"></div>'+

                    '<div class="shape"></div>'+
                    '<div class="infoBox">'+
                    '<div class="imginfo">'+
                    '<div class="imgnm"></div>'+
                    '<div class="img_status"></div>'+
                    '<div class="imgmodify"></div>'+
                    '</div>'+
                    '<div class="comment">'+
                    '<div class="commentTitle">描述信息：</div>'+
                    '<br>'+
                    '<textarea></textarea>'+
                    '</div>'+
                    '<div class="paint">'+
                    '<div class="switch">'+
                    '<div class="ball"></div>'+
                    '</div>'+
                    '<button class="btn2 ">注册</button>'+
                    '</div>'+
                    '<div class="paint2">'+
                    
                    '<select class="sortStatus">'+
                    '<option value="accomplished">已完成</option>'+
                    '<option value="ongoing" selected="selected">未完成</option>'+
                    '<option value="uncertain">待审核</option>'+
                    '</select>'+
                    '<button class="btn1 ">提交</button>'+
                    '</div>'+
                    '<div class="paint3">'+
                    '<div class="gopaint">标注-></div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'        
                }
            }
            console.log("model2:"+((new Date().getTime()) - my_start)+"ms");
            $(".right .imgBox").html(str1);
            console.log("model3:"+((new Date().getTime()) - my_start)+"ms");
            clickImg();
            console.log("model4:"+((new Date().getTime()) - my_start)+"ms");
            judgeStatus(index,Sinfo);
            //导出标记
            let my_end = new Date().getTime();//接受时间
            console.log("finn"+(my_end - my_start)+"ms");
        }

            var promiseArray = [];
            console.log("width="+workspaceArr.length);
            for (var i = 0; i < workspaceArr.length; i++) {
                promiseArray.push(timeout(workspaceArr[i]));
            }
        
            Promise.all(promiseArray).then(callback);
            //before
            //for(var a=0;a<workspaceArr.length;a++){     
                // timeout(workspaceArr[0]).then((data) => {
                //         let my_model = new Date().getTime();//接受时间
                //         console.log("model:"+(my_model - my_start)+"ms");
                //         console.log(data)
                //         imgdataArr.push(data);
                //         console.log("model1:"+((new Date().getTime()) - my_start)+"ms");
                //         for(var k=0;k<data.length;k++){
                //                 j++;
                //                 str1+='<div class="oneBox" data-index="'+j+'">'+
                //                 '<img src="'+data[k].url+'">'+
                //                 '<span class="imgname" workSpace='+data[k].workspace+'>'+data[k].name+'</span>'+
                //                 '<div class="imgstatus"></div>'+

                //                 '<div class="shape"></div>'+
                //                 '<div class="infoBox">'+
                //                 '<div class="imginfo">'+
                //                 '<div class="imgnm"></div>'+
                //                 '<div class="img_status"></div>'+
                //                 '<div class="imgmodify"></div>'+
                //                 '</div>'+
                //                 '<div class="comment">'+
                //                 '<div class="commentTitle">描述信息：</div>'+
                //                 '<br>'+
                //                 '<textarea></textarea>'+
                //                 '</div>'+
                //                 '<div class="paint">'+
                //                 '<div class="switch">'+
                //                 '<div class="ball"></div>'+
                //                 '</div>'+
                //                 '<button class="btn2 ">注册</button>'+
                //                 '</div>'+
                //                 '<div class="paint2">'+
                                
                //                 '<select class="sortStatus">'+
                //                 '<option value="accomplished">已完成</option>'+
                //                 '<option value="ongoing" selected="selected">未完成</option>'+
                //                 '<option value="uncertain">待审核</option>'+
                //                 '</select>'+
                //                 '<button class="btn1 ">提交</button>'+
                //                 '</div>'+
                //                 '<div class="paint3">'+
                //                 '<div class="gopaint">标注-></div>'+
                //                 '</div>'+
                //                 '</div>'+
                //                 '</div>'        
                //         }
                //         console.log("model2:"+((new Date().getTime()) - my_start)+"ms");
                //         $(".right .imgBox").html(str1);
                //         console.log("model3:"+((new Date().getTime()) - my_start)+"ms");
                //         clickImg();
                //         console.log("model4:"+((new Date().getTime()) - my_start)+"ms");
                //         judgeStatus(index,Sinfo);
                //         //导出标记
                //         let my_end = new Date().getTime();//接受时间
                //         console.log("finn"+(my_end - my_start)+"ms");
                // }).then(()=>{
                //     if(workspaceArr.length>1){
                //         timeout(workspaceArr[1]).then((data) => {
                //                 let my_model = new Date().getTime();//接受时间
                //                 console.log("model:"+(my_model - my_start)+"ms");
                //                 console.log(data)
                //                 imgdataArr.push(data);
                //                 console.log("model1:"+((new Date().getTime()) - my_start)+"ms");
                //                 for(var k=0;k<data.length;k++){
                //                         j++;
                //                         str1+='<div class="oneBox" data-index="'+j+'">'+
                //                         '<img src="'+data[k].url+'">'+
                //                         '<span class="imgname" workSpace='+data[k].workspace+'>'+data[k].name+'</span>'+
                //                         '<div class="imgstatus"></div>'+

                //                         '<div class="shape"></div>'+
                //                         '<div class="infoBox">'+
                //                         '<div class="imginfo">'+
                //                         '<div class="imgnm"></div>'+
                //                         '<div class="img_status"></div>'+
                //                         '<div class="imgmodify"></div>'+
                //                         '</div>'+
                //                         '<div class="comment">'+
                //                         '<div class="commentTitle">描述信息：</div>'+
                //                         '<br>'+
                //                         '<textarea></textarea>'+
                //                         '</div>'+
                //                         '<div class="paint">'+
                //                         '<div class="switch">'+
                //                         '<div class="ball"></div>'+
                //                         '</div>'+
                //                         '<button class="btn2 ">注册</button>'+
                //                         '</div>'+
                //                         '<div class="paint2">'+
                                        
                //                         '<select class="sortStatus">'+
                //                         '<option value="accomplished">已完成</option>'+
                //                         '<option value="ongoing" selected="selected">未完成</option>'+
                //                         '<option value="uncertain">待审核</option>'+
                //                         '</select>'+
                //                         '<button class="btn1 ">提交</button>'+
                //                         '</div>'+
                //                         '<div class="paint3">'+
                //                         '<div class="gopaint">标注-></div>'+
                //                         '</div>'+
                //                         '</div>'+
                //                         '</div>'        
                //                 }
                //                 console.log("model2:"+((new Date().getTime()) - my_start)+"ms");
                //                 $(".right .imgBox").html(str1);
                //                 console.log("model3:"+((new Date().getTime()) - my_start)+"ms");
                //                 clickImg();
                //                 console.log("model4:"+((new Date().getTime()) - my_start)+"ms");
                //                 judgeStatus(index,Sinfo);
                //                 //导出标记
                //                 let my_end = new Date().getTime();//接受时间
                //                 console.log("finn"+(my_end - my_start)+"ms");
                //         })
                //     }
                // });
                // $.ajax({
                //     url:'/thumbnail&'+workspaceArr[a],
                //     type:'get',
                //     dataType:'JSON',
                //     success:function(data){
                //         let my_model = new Date().getTime();//接受时间
                //         console.log("model:"+(my_model - my_start)+"ms");
                //         console.log(data)
                //         imgdataArr.push(data);
                //         console.log("model1:"+((new Date().getTime()) - my_start)+"ms");
                //         for(var k=0;k<data.length;k++){
                //                 j++;
                //                 str1+='<div class="oneBox" data-index="'+j+'">'+
                //                 '<img src="'+data[k].url+'">'+
                //                 '<span class="imgname" workSpace='+data[k].workspace+'>'+data[k].name+'</span>'+
                //                 '<div class="imgstatus"></div>'+

                //                 '<div class="shape"></div>'+
                //                 '<div class="infoBox">'+
                //                 '<div class="imginfo">'+
                //                 '<div class="imgnm"></div>'+
                //                 '<div class="img_status"></div>'+
                //                 '<div class="imgmodify"></div>'+
                //                 '</div>'+
                //                 '<div class="comment">'+
                //                 '<div class="commentTitle">描述信息：</div>'+
                //                 '<br>'+
                //                 '<textarea></textarea>'+
                //                 '</div>'+
                //                 '<div class="paint">'+
                //                 '<div class="switch">'+
                //                 '<div class="ball"></div>'+
                //                 '</div>'+
                //                 '<button class="btn2 ">注册</button>'+
                //                 '</div>'+
                //                 '<div class="paint2">'+
                                
                //                 '<select class="sortStatus">'+
                //                 '<option value="accomplished">已完成</option>'+
                //                 '<option value="ongoing" selected="selected">未完成</option>'+
                //                 '<option value="uncertain">待审核</option>'+
                //                 '</select>'+
                //                 '<button class="btn1 ">提交</button>'+
                //                 '</div>'+
                //                 '<div class="paint3">'+
                //                 '<div class="gopaint">标注-></div>'+
                //                 '</div>'+
                //                 '</div>'+
                //                 '</div>'        
                //         }
                //         console.log("model2:"+((new Date().getTime()) - my_start)+"ms");
                //         $(".right .imgBox").html(str1);
                //         console.log("model3:"+((new Date().getTime()) - my_start)+"ms");
                //         clickImg();
                //         console.log("model4:"+((new Date().getTime()) - my_start)+"ms");
                //         judgeStatus(index,Sinfo);
                //         //导出标记
                //         let my_end = new Date().getTime();//接受时间
                //     console.log("finn"+(my_end - my_start)+"ms");
                //     }

                // })
           
            //}
